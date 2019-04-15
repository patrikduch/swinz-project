using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;

namespace StatsApi.Interfaces
{
    public interface ICustomerStatsRepository : IRepository<Customer>
    {
        int GetLatestIncome(IQueryable<Order> collection);

        int GetSoldCount(IQueryable<Order> collection);
    }
}
