//-----------------------------------------------------------------------
// <copyright file="ProductUnitOfWork.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.UnitOfWork
{
    using System.Threading.Tasks;
    using Contexts;
    using OrderApi.Interfaces.Repositories;
    using OrderApi.Interfaces.UnitOfWork;
    /// <summary>
    /// Unit of work for managing products
    /// </summary>
    public class ProductUnitOfWork : IProductUnitOfWork
    {
        /// <summary>
        /// Reference to the <seealso cref="ProductContext"/> for managing products.
        /// </summary>
        private readonly ProductContext _productContext;
        /// <summary>
        /// Initializes a new instance of the <seealso cref="ProductUnitOfWork"/> class.
        /// </summary>
        /// <param name="productContext">Context for product management.</param>
        /// <param name="productRepository">Repository that encapsulates operations on to Product context.</param>
        public ProductUnitOfWork(ProductContext productContext, IProductRepository productRepository)
        {
            _productContext = productContext;
            ProductRepository = productRepository;
        }

        /// <summary>
        /// Dispose unmanaged resources of product context.
        /// </summary>
        public void Dispose()
        {
            _productContext.Dispose();
        }
        /// <summary>
        /// Save changes on to product context.
        /// </summary>
        /// <returns></returns>
        public Task<int> Complete()
        {
            return _productContext.SaveChangesAsync();
        }
        /// <summary>
        /// Interface for accessing product repository.
        /// </summary>
        public IProductRepository ProductRepository { get; }
    }
}
