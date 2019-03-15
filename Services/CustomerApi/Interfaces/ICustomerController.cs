//-----------------------------------------------------------------------
// <copyright file="ICustomerController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerApi.Domain;

namespace CustomerApi.Interfaces
{
    public interface ICustomerController
    {
        Task<IEnumerable<Customer>> Get();

        Task DeleteCustomer(int id);

        Task<Customer> AddCustomer(Customer customer);

        Task<Customer> UpdateCustomer(Customer customer);
    }
}
