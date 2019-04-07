

using PersistenceLib.Domains.UserApi;

namespace OrderApi.EntityConfigurations
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;
    using PersistenceLib.Domains.OrderApi;

    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Order");

            builder.Property(t => t.Id).ValueGeneratedNever();


            builder.HasOne(o => o.Customer)
                .WithOne(c => c.Order)
                .HasForeignKey<Order>(o => o.CustomerId);




        }
    }
}
