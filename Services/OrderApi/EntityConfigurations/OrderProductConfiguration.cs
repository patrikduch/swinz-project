using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.EntityConfigurations
{
    public class OrderProductConfiguration : IEntityTypeConfiguration<OrderProduct>
    {
        public void Configure(EntityTypeBuilder<OrderProduct> builder)
        {
            builder.ToTable("OrderProduct");

            // Composite key
            builder.HasKey(sc => new { sc.OrderId, sc.ProductId });


        }
    }
}
