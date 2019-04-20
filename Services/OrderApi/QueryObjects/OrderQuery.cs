using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Rewrite.Internal.ApacheModRewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using OrderApi.Contexts;
using OrderApi.Dto;
using OrderApi.Helpers.LINQ;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.QueryObjects
{
    public class OrderQuery : IOrderQuery
    {
        public async Task<IEnumerable<OrderListDto>> Execute(DbContext context)
        {
            var dbContext = context as ProductContext;
            var dto = dbContext?.Orders.Include(c=>c.Customer).ToList().ToOrderListDto().ToList();

            foreach (var order in dto)
            {
                // Assign the product collection to the order object
                order.Products = await dbContext.Orders
                    .SelectMany(o => o.OrderProducts)
                    .Where(c => c.OrderId == order.Id)
                    .Select(c => c.Product).ToListAsync();
            }

            return dto;
        }
    }
}
