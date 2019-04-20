//-----------------------------------------------------------------------
// <copyright file="CustomerStatsContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Contexts
{
    using Microsoft.EntityFrameworkCore;
    using PersistenceLib.Domains.OrderApi;
    using PersistenceLib.Domains.UserApi;
    using PersistenceLib.EntityConfigurations;

    /// <summary>
    /// Customer statistics context that represents connection to the database to manage customer statistics
    /// </summary>
    public class CustomerStatsContext : DbContext
    {
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
