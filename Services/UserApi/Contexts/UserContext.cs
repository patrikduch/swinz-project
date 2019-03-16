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

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            #region Conventions 

            // User entity
            modelBuilder.Entity<User>().ToTable("User")
                .Property(c => c.Username).HasColumnName("username");

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


            #endregion



        }

    }
}
