using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrderApi.Interfaces.Repositories;
using PersistenceLib;

namespace OrderApi.Interfaces.UnitOfWork
{
    public interface IProductUnitOfWork : IUnitOfWork
    {
        IProductRepository ProductRepository { get; }
    }
}
