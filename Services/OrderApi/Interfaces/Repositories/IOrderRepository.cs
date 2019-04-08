using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrderApi.Dto;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Interfaces.Repositories
{
    public interface IOrderRepository : IRepository<Order>
    {
        Task<List<Order>> GetAllOrders();

        CreateOrderDto CreateOrder(int productId, int customerId);
    }
}
