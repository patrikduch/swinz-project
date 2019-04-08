using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using OrderApi.Dto;
using OrderApi.Helpers.LINQ;
using OrderApi.Interfaces.Repositories;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public ProductContext ProductContext => Context as ProductContext;

        public OrderRepository(ProductContext context) : base(context)
        {
        }

       
        /// <summary>
        /// Get all orders (with products included)
        /// </summary>
        /// <returns></returns>
        public async Task<List<OrderListDto>> GetAllOrders()
        {

            var dto = ProductContext.Orders.ToList().ToOrderListDto().ToList();

            foreach (var order in dto)
            {
                // Assign the product collection to the order object
                order.Products = await ProductContext.Orders
                    .SelectMany(o => o.OrderProducts)
                    .Where(c => c.OrderId == order.Id)
                    .Select(c => c.Product).ToListAsync();

                // Get customer identifier
                order.CustomerId = ProductContext.Orders.Select(c => c.Customer.Id).SingleOrDefault();
            }

            return dto;
        }

        public CreateOrderDto CreateOrder(int productId, int customerId)
        {
            var order = new Order
            {
                Id = ProductContext.Orders.Count()+1,
                CustomerId = customerId,
                CreationDate = DateTime.Now
            };


            order.OrderProducts = new List<OrderProduct>
            {
                new OrderProduct
                {
                    Id = ProductContext.OrderProducts.Count()+1,
                    OrderId = order.Id,
                    ProductId = productId
                }
            };
            


            return new CreateOrderDto
            {
                Order = order,
            };



        }
    }
}
