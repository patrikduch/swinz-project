using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using OrderApi.Dto;
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

        public Task<List<Order>> GetAllOrders()
        {
            return ProductContext.Orders.ToListAsync();
        }

        public CreateOrderDto CreateOrder(int productId, int customerId)
        {

           

            var order = new Order
            {
                Id = ProductContext.Orders.Count()+1,
                CustomerId = customerId
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
