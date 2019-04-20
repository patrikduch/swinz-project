//-----------------------------------------------------------------------
// <copyright file="IOrderRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Interfaces.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Dto;
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;
    using OrderApi.Repositories;

    /// <summary>
    /// Interface that implements <seealso cref="OrderRepository"/>
    /// </summary>
    public interface IOrderRepository : IRepository<Order>
    {
        Task<IEnumerable<OrderListDto>> GetOrders();
        CreateOrderDto CreateOrder(int[] productArray, int customerId);
    }
}
