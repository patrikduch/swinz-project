//-----------------------------------------------------------------------
// <copyright file="CustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Linq;

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
        /// <summary>
        /// Get all customers
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        /// <summary>
        /// Remove customer by its id
        /// </summary>
        /// <param name="customerId">customer identifier</param>
        /// <returns></returns>
        public async Task RemoveCustomer(int customerId)
        {
            var customerEntity = await _context.Customers.Where(c => c.Id == customerId).FirstOrDefaultAsync();
            _context.Customers.Remove(customerEntity);
            await _context.SaveChangesAsync();

        }

        /// <summary>
        /// Create customer (Registration of user)
        /// </summary>
        /// <param name="firstName">first name of customer</param>
        /// <param name="surname">surname of customer</param>
        /// <returns></returns>
        public async Task CreateCustomer(string firstName, string surname)
        {
            _context.Customers.Add(new Customer
            {
                FirstName = firstName,
                Surname = surname
            });

            await _context.SaveChangesAsync();
        }

        #endregion

    }
}
