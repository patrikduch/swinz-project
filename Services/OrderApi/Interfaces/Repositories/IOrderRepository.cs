using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrderApi.Dto;
using OrderApi.QueryObjects;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Interfaces.Repositories
{
    public interface IOrderRepository : IRepository<Order>
    {
        Task<IEnumerable<OrderListDto>> GetAllOrders();

        Task<IEnumerable<OrderListDto>> GetOrders();

        CreateOrderDto CreateOrder(int[] productArray, int customerId);
    }
}
