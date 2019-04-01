using System;
using System.Collections.Generic;
using System.Text;

namespace PersistenceLib.Domains
{
    /// <summary>
    /// Entity that represents products
    /// </summary>
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
