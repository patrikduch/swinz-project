using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderApi.Dto;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.QueryObjects
{
    public interface IOrderQuery
    {
        Task<IEnumerable<OrderListDto>> Execute(DbContext context);
    }
}
