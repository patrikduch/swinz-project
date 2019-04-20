
namespace OrderApi.QueryObjects
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Dto;

    public interface IOrderQuery
    {
        bool LoadCustomers { get; set; }

        bool InjectProducts { get; set; }

        Task<IEnumerable<OrderListDto>> Execute(DbContext context);
    }
}
