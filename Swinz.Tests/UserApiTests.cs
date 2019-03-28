//-----------------------------------------------------------------------
// <copyright file="UserApiTests.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace Swinz.Tests
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using UserApi.Domains;
    using UserApi.Mocking;
    using UserApi.Repositories;
    using Xunit;

    /// <summary>
    /// Unit tests for User REST API
    /// </summary>
    public class UserApiTests
    {
        [Fact]
        public void Transform_CustomerEntity_ReturnsCustomerUserDto()
        {

            var mockService = new MockUserContextService(); 

            var mockService2 = new MockUserHelperService();
                        
            var customerRepository = new CustomerRepository(mockService, mockService2);

            try
            {
                var customerUserDtos = customerRepository.CustomerEntityToDto(new List<Customer>
                {
                    new Customer()
                    {
                        Id = 1,
                        FirstName = "Patrik",
                        LastName = "Duch",
                        User = new User
                        {
                            Username =  "patrikhunt"
                        }
                    }
                }).ToList();


                Assert.True(true, "DTO transformation was successful.");


            }
            catch (Exception)
            {
                Assert.True(false, "DTO transformation has failed.");
            }

        }

    }
}
