//-----------------------------------------------------------------------
// <copyright file="ICustomerController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using PersistenceLib.Domains;
using PersistenceLib.Domains.UserApi;

namespace UserApi.Interfaces.Controllers
{
    using Dto.Customers;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    /// <summary>
    /// Interface description for User REST API Controller
    /// </summary>
    public interface ICustomerController
    {
        Task<IEnumerable<CustomerUserDto>> GetAllCustomers();
        Task<Customer> UpdateCustomer(int id, CustomerDto customerDto);
        Task<CustomerUserDto> CreateCustomer(CustomerRegisterDto customerDto);
    }
}
