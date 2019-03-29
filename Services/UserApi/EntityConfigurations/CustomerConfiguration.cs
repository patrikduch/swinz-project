//-----------------------------------------------------------------------
// <copyright file="RoleConfiguration.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.EntityConfigurations
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using Domains;

    /// <summary>
    /// Entity configuration for Customer entity
    /// </summary>
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customer");

            builder.HasKey(c => c.Id).HasName("Id");


            builder
                .HasOne(sc => sc.User)
                .WithOne(s => s.Customer)
                .HasForeignKey<Customer>(c => c.UserId);
        }
    }
}
