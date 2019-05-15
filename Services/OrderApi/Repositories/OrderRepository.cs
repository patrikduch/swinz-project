//-----------------------------------------------------------------------
// <copyright file="OrderRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using Microsoft.AspNetCore.ResponseCaching.Internal;
using Microsoft.EntityFrameworkCore;
using OrderApi.Helpers.Fee;
using PersistenceLib.Domains.UserApi;

namespace OrderApi.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Contexts;
    using Dto;
    using OrderApi.Interfaces.Repositories;
    using QueryObjects;
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;

    /// <summary>
    /// Repository for order`s manipulation
    /// </summary>
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public ProductContext ProductContext => Context as ProductContext;

        /// <summary>
        /// Query object pattern that encapsulates multiple fetch order operations
        /// </summary>
        private readonly IOrderQuery _orderQuery;

        /// <summary>
        /// Initializes a new instance of the <seealso cref="OrderRepository"/> class.
        /// </summary>
        /// <param name="context">Context for accessing products</param>
        /// <param name="query">Query object for order filtering</param>
        public OrderRepository(ProductContext context, IOrderQuery query) : base(context)
        {
            _orderQuery = query;
        }

        /// <summary>
        /// GetAllOrders all orders (with products included)
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<OrderListDto>> GetOrders()
        {
            // GetAllOrders order data from database
            _orderQuery.InjectProducts = true;
            _orderQuery.LoadCustomers = true;
            var dbData = await _orderQuery.Execute(ProductContext);

            return dbData;
        }


        /// <summary>
        /// Creation of new order
        /// </summary>
        /// <param name="productArray">Sequence of product identifiers</param>
        /// <param name="customerId">Customer identifier (Owner of the order)</param>
        /// <param name="dtoFeeId"></param>
        /// <returns></returns>
        public CreateOrderDto CreateOrder(int[] productArray, int customerId, int dtoFeeId)
        {
            var order = new Order
            {
                Id = ProductContext.Orders.Count()+1,
                CustomerId = customerId,
                CreationDate = DateTime.Now
            };

            var customer = ProductContext.Customers.SingleOrDefault(c => c.Id == order.CustomerId);

            if (customer == null) return null;

           
            order.Customer = customer;

            // Assign collectio of order products
            order.OrderProducts = GenerateOrderProducts(productArray, order, dtoFeeId);

            //var products = order.OrderProducts.Where(c=>c.OrderId == order.Id).Select(c => c.Product).ToList();

            order.Discount = new Discount
            {
                Id = Guid.NewGuid().ToString(),
                Orders = null,
                DiscountValue = dtoFeeId
            };

     

            
            return new CreateOrderDto
            {
                Order = order,
                
               
            };

        }

        /// <summary>
        /// Update of order by identifier
        /// </summary>
        /// <param name="orderId"></param>
        /// <param name="dto"></param>
        public async Task<Order> UpdateOrder(int orderId, OrderUpdateDto dto)
        {
            // Get order entity
            var entity = ProductContext.Orders
                .Include(c=>c.Customer)
                .Include(c=>c.OrderProducts)
                .SingleOrDefault(c => c.Id == orderId);

            if (entity == null) return null;

            // Creation of new instances of OrderProducts
            var orderProducts = new List<OrderProduct>();

            if (dto.ProductIds == null) return null;

            foreach (var dtoProductId in dto.ProductIds)
            {
                
                orderProducts.Add(new OrderProduct
                {
                    OrderProductId =  Guid.NewGuid().ToString(),
                    OrderId = orderId,
                    ProductId = dtoProductId,
                    Order = null,
                    Product = null
                });
            }

            entity.CustomerId = dto.CustomerId;

            entity.OrderProducts = orderProducts;

            


            await Context.SaveChangesAsync();


            return entity;

        }

        /// <summary>
        /// Delete order by identifier
        /// </summary>
        /// <param name="orderId">Order identifier</param>
        /// <returns></returns>
        public Task DeleteOrder(int orderId)
        {
            var orderEntity = ProductContext.Orders.SingleOrDefault(c => c.Id == orderId);

            if (orderEntity == null) return null;

            orderEntity.IsDeleted = true;

            return ProductContext.SaveChangesAsync();
        }

        /// <summary>
        /// Generate associations between product and orders (Fill the associative table OrderProducts)
        /// </summary>
        /// <param name="productArray">Sequence of product identifiers</param>
        /// <param name="order">Order instance</param>
        /// <param name="customerDiscount"></param>
        /// <param name="customerId"></param>
        /// <returns></returns>
        private List<OrderProduct> GenerateOrderProducts(IEnumerable<int> productArray, Order order,
            decimal customerDiscount)
        {
            var orders = new List<OrderProduct>();

            var counter = 0;
            var orderProductId = 0;

            foreach (var i in productArray)
            {
                if (counter == 0)
                {
                    orderProductId = ProductContext.OrderProducts.Count() + 1;
                }

                var productEntity = ProductContext.Products.SingleOrDefault(c => c.Id == i);
                var productPrice = productEntity.Price;

                productEntity.OriginalPrice = productPrice;

                
                orders.Add(new OrderProduct
                {
                    OrderProductId = Guid.NewGuid().ToString(),
                    OrderId = order.Id,
                    ProductId = i,
                    Product = productEntity
                    
                    
                });


                orderProductId++;
                counter++;
            }

            return orders;
        }
    }
}
