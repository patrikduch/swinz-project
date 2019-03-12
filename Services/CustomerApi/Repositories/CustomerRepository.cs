//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace CustomerApi.Repositories
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using CustomerApi.Domain;
    using CustomerApi.Interfaces;
    using CustomerApi.Contexts;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Repository for customer`s manipulation
    /// </summary>
    public class CustomerRepository : ICustomerRepository
    {
        #region Fields
        private readonly CustomerContext _context;
        #endregion

        #region Constructors
        public CustomerRepository(CustomerContext customerContext)
        {
            _context = customerContext;
        }
        #endregion

        #region Methods
        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }
        #endregion

    }
}
