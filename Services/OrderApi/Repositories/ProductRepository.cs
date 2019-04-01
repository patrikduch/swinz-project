//-----------------------------------------------------------------------
// <copyright file="ProductRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

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
        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductRepository"/> class.
        /// </summary>
        /// <param name="context">Context for handling products.</param>
        public ProductRepository(ProductContext context) : base(context)
        {
        }
    }
}
