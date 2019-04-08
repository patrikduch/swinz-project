using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib.Domains.OrderApi;
using PersistenceLib.Domains.UserApi;

namespace OrderApi.Dto
{
    public class CreateOrderDto
    {
        public Order Order { get; set; }

        public Product Product { get; set; }

        public OrderProduct OrderProduct { get; set; }

    }
}
