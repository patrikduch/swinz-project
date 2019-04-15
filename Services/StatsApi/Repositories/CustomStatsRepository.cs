using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersistenceLib;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;
using StatsApi.Contexts;
using StatsApi.Interfaces;

namespace StatsApi.Repositories
{
    public class CustomStatsRepository : Repository<Customer>, ICustomStatsRepository
    {
        /// <summary>
        /// Initializes a new instance of the <seealso cref="CustomStatsRepository"/> class.
        /// </summary>
        /// <param name="context">Context for handling products.</param>
        public CustomStatsRepository(CustomerStatsContext context) : base(context)
        {
        }

        public CustomerStatsContext CustomerStatsContext => Context as CustomerStatsContext;


        public int GetLatestIncome(List<Order> test)
        {
            return test.Where(c => c.CreationDate.Year == DateTime.Now.Year)
                .SelectMany(c => c.OrderProducts).Sum(c => c.Product.Price);
        }

        public int GetLatestIncome(IQueryable<Order> test)
        {
            return test.Where(c => c.CreationDate.Year == DateTime.Now.Year)
                .SelectMany(c => c.OrderProducts).Sum(c => c.Product.Price);



        }
    }
}
