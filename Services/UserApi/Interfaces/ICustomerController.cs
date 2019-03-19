//-----------------------------------------------------------------------
// <copyright file="ICustomerController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;
using System.Threading.Tasks;
using UserApi.Domains;
using UserApi.Dto;

namespace UserApi.Interfaces
{
    /// <summary>
    /// Interface description for User REST API Controller
    /// </summary>
    public interface ICustomerController
    {
        Task<List<Customer>> GetAllCustomers();

        Task<Customer> UpdateCustomer(int id, CustomerDto customerDto);
    }
}
