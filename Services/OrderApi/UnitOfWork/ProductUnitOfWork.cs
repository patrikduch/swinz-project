using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrderApi.Contexts;
using OrderApi.Interfaces.Repositories;
using OrderApi.Interfaces.UnitOfWork;

namespace OrderApi.UnitOfWork
{
    public class ProductUnitOfWork : IProductUnitOfWork
    {

        private readonly ProductContext _productContext;

        public ProductUnitOfWork(ProductContext productContext, IProductRepository productRepository)
        {
            _productContext = productContext;
            ProductRepository = productRepository;
        }


        public void Dispose()
        {
            _productContext.Dispose();
        }

        public Task<int> Complete()
        {
            return _productContext.SaveChangesAsync();
        }

        public IProductRepository ProductRepository { get; }
    }
}
