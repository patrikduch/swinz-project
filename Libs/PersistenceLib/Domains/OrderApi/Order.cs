using PersistenceLib.Domains.UserApi;

namespace PersistenceLib.Domains.OrderApi
{
    using System;
    using System.Collections.Generic;


    public class Order
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }

        public Customer Customer { get; set; }

        public ICollection<OrderProduct> OrderProducts { get; set; }

        public DateTime CreationDate { get; set; }

        public bool IsDeleted { get; set; }

        public Discount Discount { get; set; }


    }
}
