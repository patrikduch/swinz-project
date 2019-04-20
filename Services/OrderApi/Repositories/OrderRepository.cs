using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using OrderApi.Dto;
using OrderApi.Helpers.LINQ;
using OrderApi.Interfaces.Repositories;
using OrderApi.QueryObjects;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public ProductContext ProductContext => Context as ProductContext;

        private IOrderQuery _orderQuery;

        public OrderRepository(ProductContext context, IOrderQuery query) : base(context)
        {
            _orderQuery = query;
        }


        /// <summary>
        /// Get all orders (with products included)
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<OrderListDto>> GetAllOrders()
        {
            // Get order data from database
            var dbData = await _orderQuery.Execute(ProductContext);

            // Returns only needed data
            return dbData.ToList();
        }

    
        public Task<IEnumerable<OrderListDto>> GetOrders()
        {
            throw new NotImplementedException();
        }

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
