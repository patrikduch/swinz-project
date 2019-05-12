

namespace UserApi.QueryObjects
{
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Dto.Customers;

    /// <summary>
    /// Interface for customer`s query object
    /// </summary>
    public interface ICustomerQuery
    {
        bool FilterById { get; set; }
        int CustomerId { get; set; }

        bool FilterByName { get; set; }

        string FirstName { get; set; }

        string LastName { get; set; }

        Task<CustomerDto> Execute(DbContext context);
    }
}
