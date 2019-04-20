//-----------------------------------------------------------------------
// <copyright file="OrderRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

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

            // Returns only needed data
            return dbData.ToList();
        }

        /// <summary>
        /// Creation of new order
        /// </summary>
        /// <param name="productArray">Sequence of product identifiers</param>
        /// <param name="customerId">Customer identifier (Owner of the order)</param>
        /// <returns></returns>
        public CreateOrderDto CreateOrder(int[] productArray, int customerId)
        {
            var order = new Order
            {
                Id = ProductContext.Orders.Count()+1,
                CustomerId = customerId,
                CreationDate = DateTime.Now
            };

            // Assign collectio of order products
            order.OrderProducts = GenerateOrderProducts(productArray, order);
            
            return new CreateOrderDto
            {
                Order = order,
            };

        }

        /// <summary>
        /// Generate associations between product and orders (Fill the associative table OrderProducts)
        /// </summary>
        /// <param name="productArray">Sequence of product identifiers</param>
        /// <param name="order">Order instance</param>
        /// <returns></returns>
        private List<OrderProduct> GenerateOrderProducts(IEnumerable<int> productArray, Order order)
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

                orders.Add(new OrderProduct
                {
                    Id = orderProductId,
                    OrderId = order.Id,
                    ProductId = i
                });


                orderProductId++;
                counter++;
            }

            return orders;
        }
    }
}
