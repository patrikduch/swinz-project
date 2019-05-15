using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.EntityConfigurations
{
    public class DiscountConfiguration : IEntityTypeConfiguration<Discount>
    {
        public void Configure(EntityTypeBuilder<Discount> builder)
        {
            builder.ToTable("Discount");

            builder.Property(t => t.Id).ValueGeneratedNever();

            // Relationship to Orders (1 (Disc): N (Order))

            builder.HasMany(c => c.Orders).WithOne(c => c.Discount);

        }
    }
}
