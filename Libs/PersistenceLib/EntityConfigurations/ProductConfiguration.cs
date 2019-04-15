using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersistenceLib.Domains.OrderApi;

namespace PersistenceLib.EntityConfigurations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            //builder.ToTable("Product");
            builder.Property(t => t.Id).ValueGeneratedNever();
        }
    }
}
