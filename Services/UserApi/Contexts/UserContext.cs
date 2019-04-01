//-----------------------------------------------------------------------
// <copyright file="UserContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using PersistenceLib.Domains;
using PersistenceLib.Domains.UserApi;

namespace UserApi.Contexts
{
    using EntityConfigurations;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// User context represents connection to the database to manage users
    /// </summary>
    public class UserContext : DbContext
    {

        public UserContext()
        {

        }

        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }

        /// <summary>
        /// Data-set for accessing users
        /// </summary>
        public DbSet<User> Users { get; set; }
        /// <summary>
        /// Data-set for accessing roles
        /// </summary>
        public DbSet<Role> Roles { get; set; }
        /// <summary>
        /// Data-set for accessing customers
        /// </summary>
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
            modelBuilder.ApplyConfiguration(new CustomerConfiguration());
        }

    }
}
