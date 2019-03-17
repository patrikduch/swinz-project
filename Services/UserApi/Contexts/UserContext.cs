//-----------------------------------------------------------------------
// <copyright file="UserContext.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------


using UserApi.Domains;

namespace UserApi.Contexts
{
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            #region Conventions 

            // User entity
            modelBuilder.Entity<User>().ToTable("User")
                .Property(c => c.Username).HasColumnName("username");

            // Primary key of User entity
            modelBuilder.Entity<User>().HasKey(u => u.Id);


            // Role entity
            modelBuilder.Entity<Role>().ToTable("Role");

            // UserRoles entity
            modelBuilder.Entity<UserRoles>().HasKey(sc => new { sc.Id, sc.UserId, sc.RoleId }); // Composite key
            #endregion

            #region Relationship mapping

            // M:N (Users -> Roles)

            modelBuilder.Entity<UserRoles>()
                .HasOne(sc => sc.User)
                .WithMany(s => s.UserRoles)
                .HasForeignKey(sc => sc.UserId);


            modelBuilder.Entity<UserRoles>()
                .HasOne(sc => sc.Role)
                .WithMany(s => s.UserRoles)
                .HasForeignKey(sc => sc.RoleId);


            // 1:1 User -> Customer

            modelBuilder.Entity<User>().HasOne(u => u.Customer)
                .WithOne(c => c.User)
                .HasForeignKey<User>(u => u.CustomerId);


            #endregion
        }

    }
}
