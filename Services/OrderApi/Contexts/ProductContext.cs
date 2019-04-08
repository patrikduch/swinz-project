//-----------------------------------------------------------------------
// <copyright file="ProductContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using OrderApi.EntityConfigurations;
using PersistenceLib.Domains.UserApi;

namespace OrderApi.Contexts
{
    using Microsoft.EntityFrameworkCore;
    using PersistenceLib.Domains.OrderApi;

    /// <summary>
    /// User context represents connection to the database to manage users
    /// </summary>
    public class ProductContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductContext"/> class.
        /// </summary>
        /// <param name="options">Context setup configuration for context creation.</param>
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new OrderProductConfiguration());

        }
    }
}
