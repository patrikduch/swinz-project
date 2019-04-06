
namespace PersistenceLib.Domains.OrderApi
{
    using System;
    using System.Collections.Generic;


    public class Order
    {
        public int Id { get; set; }

        public DateTime CreationDate { get; set; }

        public IList<OrderProduct> OrderProducts { get; set; }

    }
}
