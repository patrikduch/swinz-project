

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

            builder.HasOne(c => c.Customer)
                .WithMany(c => c.Orders);





        }
    }
}
