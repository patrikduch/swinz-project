//-----------------------------------------------------------------------
// <copyright file="ICustomerUnitOfWork.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------
namespace UserApi.Interfaces.UnitOfWork
{
    using Repositories;
    using PersistenceLib;

    /// <summary>
    /// Contract for customer`s unit of work
    /// </summary>
    public interface ICustomerUnitOfWork : IUnitOfWork
    {
        ICustomerRepository CustomerRepository { get; }
        IUserRepository UserRepository { get; }
    }
}
