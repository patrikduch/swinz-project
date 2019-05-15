using System;
using System.Collections.Generic;
using System.Text;

namespace PersistenceLib.Domains.OrderApi
{
    public class Discount
    {
        public string Id { get; set; }

        public int DiscountValue{ get; set; }

        public ICollection<Order> Orders { get; set; }


    }
}
