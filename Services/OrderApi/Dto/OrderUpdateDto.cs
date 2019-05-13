using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Dto
{
    public class OrderUpdateDto
    {
        public int OrderId { get; set; }

        public int[] ProductIds { get; set; }

        public int CustomerId { get; set; }




    }
}
