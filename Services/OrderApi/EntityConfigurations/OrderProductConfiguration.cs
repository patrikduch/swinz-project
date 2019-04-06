//-----------------------------------------------------------------------
// <copyright file="OrderProductConfiguration.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.EntityConfigurations
{
    /// <summary>
    /// Entity configuration for OrderProduct entity
    /// </summary>
    public class OrderProductConfiguration : IEntityTypeConfiguration<OrderProduct>
    {
        public void Configure(EntityTypeBuilder<OrderProduct> builder)
        {
            builder.ToTable("OrderProduct");


            // Composite key
            builder.HasKey(sc => new { sc.Id, sc.OrderId, sc.ProductId });

            builder
                .HasOne(sc => sc.Order)
                .WithMany(s => s.OrderProducts)
                .HasForeignKey(sc => sc.ProductId);


            builder
                .HasOne(sc => sc.Product)
                .WithMany(s => s.OrderProducts)
                .HasForeignKey(sc => sc.Order);


        }
    }
}
