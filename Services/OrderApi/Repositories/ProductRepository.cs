//-----------------------------------------------------------------------
// <copyright file="ProductRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderApi.Dto;
using OrderApi.Dto.Pagination;
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

        private readonly ProductContext _productContext;


        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductRepository"/> class.
        /// </summary>
        /// <param name="context">Context for handling products.</param>
        public ProductRepository(ProductContext context) : base(context)
        {
            _productContext = context;
        }

        /// <summary>
        /// Get products with pagination filtering
        /// </summary>
        /// <param name="pageIdentifier">Page number identifier</param>
        /// <returns></returns>
        public async Task<IEnumerable<Product>> GetProductsWithPagination(int pageIdentifier)
        {
            // Get interval for specific page identifier
            var pagination = new PaginationTransferObject { PageIdentifier = pageIdentifier };
            var res = Paginator.GetPageInterval(pagination);

            return _productContext.Products.
                Where(p => p.IsDeleted.Equals(false))
                .Skip(res.From)
                .Take(5);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ProductPagerListDto GetProductPaginationInfo()
        {
           var pageCount = Paginator.GetPageCount(_productContext.Products.Count());

           return new ProductPagerListDto
           {
               PageCount = pageCount
           };

        }
    }
}
