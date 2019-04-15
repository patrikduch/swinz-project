using System;
using System.Linq;
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


        public int GetLatestIncome(IQueryable<Order> collection)
        {
            return collection.Where(c => c.CreationDate.Year == DateTime.Now.Year)
                .SelectMany(c => c.OrderProducts).Where(c=>c.Product.IsDeleted.Equals(false))
                .Sum(c => c.Product.Price);
        }

        public int GetSoldCount(IQueryable<Order> collection)
        {
            return collection.Include(c => c.OrderProducts)
                .SelectMany(c => c.OrderProducts)
                .Where(c => c.Product.IsDeleted.Equals(false))
                .Select(c => c.Product)
                .Count();
        }
    }
}
