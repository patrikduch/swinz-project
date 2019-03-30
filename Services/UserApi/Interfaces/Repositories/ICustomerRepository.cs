//-----------------------------------------------------------------------
// <copyright file="ICustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using UserApi.Dto;

namespace UserApi.Interfaces.Repositories
{
    using PersistenceLib;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;
    using Dto.Customers;

    /// <summary>
    /// Interface that implements Customer repository
    /// </summary>
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<Customer> CreateCustomer(CustomerRegisterDto customerDto);
        Task<List<CustomerUserDto>> GetAllCustomers();
        Task<List<CustomerUserDto>> GetCustomersPaged(int from, int to, int pageSize);
    }
}
