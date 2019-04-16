using System.Collections.Generic;
using System.Linq;
using Moq;
using PersistenceLib.Domains.OrderApi;
using StatsApi.Contexts;
using StatsApi.Repositories;

namespace Swinz.Tests.Services.StatsApi
{
    using Xunit;

    /// <summary>
    /// Unit tests for Statistics REST API
    /// </summary>
    public class StatsApiTests
    {
        /// <summary>
        /// Calculation of getting last year income
        /// </summary>
        [Fact]
        public void GetLastYearIncome_ReturnsNumericValue()
        {

            // Arrange

            var orderProducts = new List<OrderProduct>()
            {
                new OrderProduct
                {
                    Id = 1,
                    OrderId = 1,
                    ProductId = 1,
                    Product = new Product
                    {
                        Id = 1,
                        Name = "Product",
                        Price = 256,
                        IsDeleted = false,
                    }
                },

                new OrderProduct
                {
                    Id = 2,
                    OrderId = 2,
                    ProductId = 2,
                    Product = new Product
                    {
                        Id = 2,
                        Name = "Product2",
                        Price = 10,
                        IsDeleted = false,
                    }
                }


            };

            var customers =
                new List<Order>
                {

                    new Order()
                    {
                        Id = 1,
                        CreationDate = System.DateTime.Now,
                        OrderProducts = orderProducts
                    }
                }.AsQueryable();


            var mockContext = new Mock<CustomerStatsContext>();

            var repository = new CustomerStatsRepository(mockContext.Object);

            var actual = repository.GetLatestIncome(customers);


            // Assert
            Assert.Equal(266, actual);

        }

        /// <summary>
        /// Calculation of getting total number of sold products
        /// </summary>
        [Fact]
        public void GetSoldCount_ReturnsNumericValue()
        {

            // Arrange

            var orderProducts = new List<OrderProduct>()
            {
                new OrderProduct
                {
                    Id = 1,
                    OrderId = 1,
                    ProductId = 1,
                    Product = new Product
                    {
                        Id = 1,
                        Name = "Product",
                        Price = 256,
                        IsDeleted = false,
                    }
                },

                new OrderProduct
                {
                    Id = 2,
                    OrderId = 2,
                    ProductId = 2,
                    Product = new Product
                    {
                        Id = 2,
                        Name = "Product2",
                        Price = 10,
                        IsDeleted = false,
                    }
                }


            };

            var customers =
                new List<Order>
                {

                    new Order()
                    {
                        Id = 1,
                        CreationDate = System.DateTime.Now,
                        OrderProducts = orderProducts
                    }
                }.AsQueryable();


            var mockContext = new Mock<CustomerStatsContext>();

            var repository = new CustomerStatsRepository(mockContext.Object);

            var actual = repository.GetSoldCount(customers);

           
            Assert.Equal(2, actual);

        }

    }
}
