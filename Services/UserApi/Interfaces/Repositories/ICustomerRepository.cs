﻿//-----------------------------------------------------------------------
// <copyright file="ICustomerRepository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace UserApi.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Domains;
    using Dto.Customers;

    /// <summary>
    /// Interface that implements Customer repository
    /// </summary>
    public interface ICustomerRepository
    {
        //Task<List<CustomerUserDto>> GetAll();

        Task<List<CustomerUserDto>> GetAll();

        Task Remove(int customerId);

        Task<Customer> UpdateCustomer(int id, CustomerDto customerDto);

        Task<CustomerUserDto> Add(CustomerRegisterDto customerDto);
    }
}
