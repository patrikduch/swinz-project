//-----------------------------------------------------------------------
// <copyright file="ProductContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using OrderApi.EntityConfigurations;

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

        /// <summary>
        /// Data-set for accessing products
        /// </summary>
        public virtual DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
        }
    }
}
