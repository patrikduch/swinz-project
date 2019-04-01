//-----------------------------------------------------------------------
// <copyright file="UserConfiguration.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using PersistenceLib.Domains;

namespace UserApi.EntityConfigurations
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    /// <summary>
    /// Entity configuration for User entity
    /// </summary>
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            // To table
            builder.ToTable("User");

            // Primary keys
            builder.HasKey(u => u.Id);

            // Properties
            builder.Property(c => c.Username).HasColumnName("username");

            



        }
    }
}
