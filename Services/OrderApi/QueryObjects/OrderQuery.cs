

namespace OrderApi.QueryObjects
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Contexts;
    using Dto;
    using Helpers.LINQ;

    public class OrderQuery : IOrderQuery
    {
        public bool LoadCustomers { get; set; } = false;
        public bool InjectProducts { get; set; } = false;

        public async Task<IEnumerable<OrderListDto>> Execute(DbContext context)
        {
            var dbContext = context as ProductContext;
            List<OrderListDto> dto = null;

            if (LoadCustomers)
            {
                dto = dbContext?.Orders.Include(c => c.Customer)
                    .Where(c=>c.IsDeleted.Equals(false))
                    .ToList()
                    .ToOrderListDto()
                    .ToList();
            }

            if (dto == null) return null; // No data was fetched

            if (InjectProducts)
            {
                foreach (var order in dto)
                {
                    // Assign the product collection to the order object
                    order.Products = await dbContext.Orders
                        .SelectMany(o => o.OrderProducts)
                        .Where(c => c.OrderId == order.Id)
                        .Select(c => c.Product)
                        .ToListAsync();
                }
            }

            return dto;
        }
    }
}
