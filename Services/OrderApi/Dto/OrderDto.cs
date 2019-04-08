using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderApi.Dto
{
    public class OrderDto
    {
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
    }
}
