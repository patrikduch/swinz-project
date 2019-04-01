//-----------------------------------------------------------------------
// <copyright file="IProductUnitOfWork.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Interfaces.UnitOfWork
{
    using Repositories;
    using PersistenceLib;
    /// <summary>
    /// Interface for unit of work to manage products
    /// </summary>
    public interface IProductUnitOfWork : IUnitOfWork
    {
        IProductRepository ProductRepository { get; }
    }
}
