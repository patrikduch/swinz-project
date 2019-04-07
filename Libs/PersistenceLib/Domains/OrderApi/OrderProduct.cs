using System;
using System.Collections.Generic;
using System.Text;
using PersistenceLib.Domains.UserApi;

namespace PersistenceLib.Domains.OrderApi
{
    public class OrderProduct
    {
        public int Id { get; set; }

        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public Order Order { get; set; }

        public Product Product { get; set; }

        public Customer Customer { get; set; }
    }
}
