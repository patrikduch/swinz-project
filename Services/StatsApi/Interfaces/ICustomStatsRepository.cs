using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;

namespace StatsApi.Interfaces
{
    public interface ICustomStatsRepository : IRepository<Customer>
    {
        int GetLatestIncome(IQueryable<Order> test);
    }
}
