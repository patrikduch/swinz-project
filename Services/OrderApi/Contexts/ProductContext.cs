using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersistenceLib.Domains;

namespace OrderApi.Contexts
{
    /// <summary>
    /// User context represents connection to the database to manage users
    /// </summary>
    public class ProductContext : DbContext
    {


        public ProductContext()
        {
            
        }

        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }

        /// <summary>
        /// Data-set for accessing products
        /// </summary>
        public virtual DbSet<Product> Products { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
