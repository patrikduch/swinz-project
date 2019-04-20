//-----------------------------------------------------------------------
// <copyright file="ICustomerStatsRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Interfaces
{
    using System.Linq;
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;
    using PersistenceLib.Domains.UserApi;

    /// <summary>
    /// 
    /// </summary>
    public interface ICustomerStatsRepository : IRepository<Customer>
    {
        int GetLatestIncome(IQueryable<Order> collection);
        int GetSoldCount(IQueryable<Order> collection);
    }
}
