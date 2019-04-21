//-----------------------------------------------------------------------
// <copyright file="IProductRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace OrderApi.Interfaces.Repositories
{
    using PersistenceLib;
    using PersistenceLib.Domains.OrderApi;
    using OrderApi.Repositories;

    /// <summary>
    /// Interface that implements <seealso cref="ProductRepository"/>
    /// </summary>
    public interface IProductRepository : IRepository<Product>
    {
    
    }
}
