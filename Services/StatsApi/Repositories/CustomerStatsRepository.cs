//-----------------------------------------------------------------------
// <copyright file="CustomerStatsRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Repositories
{
    using System;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;
    using PersistenceLib.Domains.UserApi;
    using Contexts;
    using Interfaces;

    /// <summary>
    /// Repository for customers statistics
    /// </summary>
    public class CustomerStatsRepository : Repository<Customer>, ICustomerStatsRepository
    {
        /// <summary>
        /// Initializes a new instance of the <seealso cref="CustomerStatsRepository"/> class.
        /// </summary>
        /// <param name="context">Context for handling products.</param>
        public CustomerStatsRepository(CustomerStatsContext context) : base(context)
        {
        }

        public CustomerStatsContext CustomerStatsContext => Context as CustomerStatsContext;

        /// <summary>
        /// Sum of all sold products
        /// </summary>
        /// <param name="collection">IQueryable collection which will be executed</param>
        /// <returns>numeric representation of total company income</returns>
        public decimal GetLatestIncome(IQueryable<Order> collection)
        {
            return collection.Where(c => c.CreationDate.Year == DateTime.Now.Year)
                .SelectMany(c => c.OrderProducts).Where(c=>c.Product.IsDeleted.Equals(false))
                .Sum(c => c.Product.Price);
        }

        /// <summary>
        /// GetSummaryStats total number of sold products
        /// </summary>
        /// <param name="collection">IQueryable collection which will be executed</param>
        /// <returns>numeric representation of total sold products</returns>
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
