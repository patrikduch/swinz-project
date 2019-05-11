//-----------------------------------------------------------------------
// <copyright file="MonthStatsHelper.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Helpers.CustomerStatistics
{
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;
    using PersistenceLib.Domains.OrderApi;
    using Dto;

    public class MonthStatsHelper
    {
        /// <summary>
        /// Get products identifier for all available months
        /// </summary>
        /// <param name="query">Dbset of Orders</param>
        /// <returns>Collection of all products with specific months</returns>
        public static IEnumerable<MonthBaseDto> GetMonthsData(IQueryable<Order> query)
        {
            var months = new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };

            query = query.Include(c => c.OrderProducts);

            foreach (var month in months)
            {
                var res = query.Where(c => c.CreationDate.Month == month).ToList();

                if (res.Count == 0) continue;
                
                var productIds = res.Select(c => c.OrderProducts.Select(d => d.ProductId)).ToList();

                yield return new MonthBaseDto
                {
                    MonthId = month,
                    ProductsIds = productIds.SelectMany(c => c).ToList()
                };
            }
        }
    }
}
