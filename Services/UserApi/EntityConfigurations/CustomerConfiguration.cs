using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserApi.Domains;

namespace UserApi.EntityConfigurations
{
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
