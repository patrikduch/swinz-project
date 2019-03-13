//-----------------------------------------------------------------------
// <copyright file="ICustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------
namespace CustomerApi.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using CustomerApi.Domain;

    /// <summary>
    /// Interface of Customer repository
    /// </summary>
    public interface ICustomerRepository
    {
        Task<IEnumerable<Customer>> GetCustomers();

        Task RemoveCustomer(int customerId);

        Task CreateCustomer(string firstName, string surname);
    }
}
