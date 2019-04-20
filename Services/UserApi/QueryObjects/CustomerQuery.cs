

namespace UserApi.QueryObjects
{
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using PersistenceLib.Domains.UserApi;
    using Dto.Customers;

    public class CustomerQuery : ICustomerQuery
    {
        public bool FilterById { get; set; } = false;
        public int  CustomerId { get; set; }

        public async Task<CustomerDto> Execute(DbContext context)
        {
            Customer entity = null;

            if (FilterById)
            {
                entity = await context.Set<Customer>().Where(c => c.Id == CustomerId).FirstOrDefaultAsync();
            }

            if (entity == null) return null; // No data was found

            return new CustomerDto
            {
                Id = entity.Id,
                FirstName = entity.FirstName,
                LastName = entity.LastName,
                Discount = entity.Discount
            };
        }
    }
}
