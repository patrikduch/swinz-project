using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;
using PersistenceLib.EntityConfigurations;

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

        /// <summary>
        /// Data-set for accessing products
        /// </summary>
        public DbSet<Product> Products { get; set; }

        /// <summary>
        /// Data-set for accessing orders
        /// </summary>
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customer");
            modelBuilder.Entity<Order>().ToTable("Order");

            modelBuilder.ApplyConfiguration(new ProductConfiguration());

        }
    }
}
