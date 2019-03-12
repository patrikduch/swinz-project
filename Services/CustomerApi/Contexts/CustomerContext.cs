//-----------------------------------------------------------------------
// <copyright file="CustomerContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using CustomerApi.Domain;

namespace CustomerApi.Contexts
{
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Customer context represents connection to the database to manage customers
    /// </summary>
    public class CustomerContext : DbContext
    {

        public CustomerContext()
        {
                
        }

        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers{ get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
