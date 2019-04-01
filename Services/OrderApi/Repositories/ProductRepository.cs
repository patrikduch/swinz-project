using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderApi.Contexts;
using OrderApi.Interfaces.Repositories;
using PersistenceLib;
using PersistenceLib.Domains;

namespace OrderApi.Repositories
{
    public class ProductRepository: Repository<Product>, IProductRepository
    {

        public ProductRepository(ProductContext context) : base(context)
        {
            

        }
    }
}
