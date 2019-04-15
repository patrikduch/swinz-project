using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersistenceLib.Domains.UserApi;

namespace StatsApi.Contexts
{
    public class CustomerStatsContext : DbContext
    {
        public CustomerStatsContext()
        {

        }

        public CustomerStatsContext(DbContextOptions<CustomerStatsContext> options) : base(options)
        {
        }

        /// <summary>
        /// Data-set for accessing customers
        /// </summary>
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customer");

        }
    }
}
