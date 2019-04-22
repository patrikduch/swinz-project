//-----------------------------------------------------------------------
// <copyright file="ProductRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PaginationLib;

namespace OrderApi.Repositories
{
    using Contexts;
    using OrderApi.Interfaces.Repositories;
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;

    /// <summary>
    /// Repository for managing products
    /// </summary>
    public class ProductRepository: Repository<Product>, IProductRepository
    {

        private ProductContext _productContext;


        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductRepository"/> class.
        /// </summary>
        /// <param name="context">Context for handling products.</param>
        public ProductRepository(ProductContext context) : base(context)
        {
            _productContext = context;
        }

        public async Task<IEnumerable<Product>> GetProductsWithPagination(int pageIdentifier)
        {

            var pagination = new PaginationTransferObject { PageIdentifier = pageIdentifier };

            var res = Paginator.GetPage(pagination);


            return await _productContext.Products
           
                .Skip(res.From)
                .Take(res.To)
                .ToListAsync();

        }
    }
}
