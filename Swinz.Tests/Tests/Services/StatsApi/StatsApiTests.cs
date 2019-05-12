using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Moq;
using PersistenceLib.Domains.OrderApi;
using StatsApi.Contexts;
using StatsApi.Dto;
using StatsApi.Helpers.CustomerStatistics;
using StatsApi.Repositories;
using Swinz.Tests.Helpers;

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

            #region Arrange

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



            #endregion

            #region Act
            var actual = repository.GetLatestIncome(customers);
            #endregion

            #region Assert
            Assert.Equal(266, actual);
            #endregion
        }

        /// <summary>
        /// Calculation of getting total number of sold products
        /// </summary>
        [Fact]
        public void GetSoldCount_ReturnsNumericValue()
        {

            #region Arrange
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

            #endregion

            #region Act

            var actual = repository.GetSoldCount(customers);

            #endregion

            #region Assert

            Assert.Equal(2, actual);

            #endregion

        }


        /// <summary>
        /// Test for getting month data with single order
        /// </summary>
        [Fact]
        public void GetMonthsData_WithOneOrder_ReturnsProductIdentifiers()
        {
            #region Arrange

            var ctx = new Mock<CustomerStatsContext>();

            var orders = new List<Order>()
            {
                new Order
                {
                    Id =  1,
                    CreationDate = new DateTime(2019, 5, 15),
                    CustomerId =  1,
                    OrderProducts =  new List<OrderProduct>
                    {
                        new OrderProduct
                        {
                            Id =  1,
                            Product = new Product
                            {
                                Id = 1,
                                IsDeleted = false,
                                Name =  "Vyrobek1",
                                Price = 256
                            },
                            ProductId = 1
                        }
                    }
                },


            };

            var mockDbSet = MockHelper.GetMockDbSet<Order>(orders);

            ctx.Setup(c => c.Set<Order>()).Returns(mockDbSet.Object);

            #endregion

            #region Act
            var monthData = MonthStatsHelper.GetMonthsData(mockDbSet.Object.AsQueryable() as DbSet<Order>).ToList();
            var resultEntity = monthData.SelectMany(c => c.ProductsIds).ToList();
            #endregion

            #region Assert
            Assert.Equal(1, resultEntity.Select(c => c).SingleOrDefault());
            #endregion

        }


        /// <summary>
        /// Test for getting month data with multiple orders
        /// </summary>
        [Fact]
        public void GetMonthsData_WithMultipleOrders_ReturnsProductIdentifiers()
        {
            #region Arrange

            var ctx = new Mock<CustomerStatsContext>();

            var orders = new List<Order>()
            {
                new Order
                {
                    Id =  1,
                    CreationDate = new DateTime(2019, 5, 15),
                    CustomerId =  1,
                    OrderProducts =  new List<OrderProduct>
                    {
                        new OrderProduct
                        {
                            Id =  1,
                            Product = new Product
                            {
                                Id = 1,
                                IsDeleted = false,
                                Name =  "Vyrobek1",
                                Price = 256
                            },
                            ProductId = 1
                        }
                    }
                },

                new Order
                {
                    Id =  2,
                    CreationDate = new DateTime(2019, 5, 14),
                    CustomerId =  1,
                    OrderProducts =  new List<OrderProduct>
                    {
                        new OrderProduct
                        {
                            Id =  2,
                            Product = new Product
                            {
                                Id = 2,
                                IsDeleted = false,
                                Name =  "Vyrobek2",
                                Price = 251
                            },
                            ProductId = 2
                        }
                    }
                },


            };

            var mockDbSet = MockHelper.GetMockDbSet<Order>(orders);

            ctx.Setup(c => c.Set<Order>()).Returns(mockDbSet.Object);




            #endregion

            #region Act

            var monthData = MonthStatsHelper.GetMonthsData(mockDbSet.Object.AsQueryable() as DbSet<Order>).ToList();

            var productIds = monthData.SelectMany(c => c.ProductsIds).ToList();

            var expectedProductIds = new List<int>()
            {
                1, 2
            };

            #endregion

            #region Assert
            Assert.Equal(productIds, expectedProductIds);
            #endregion
        }

        [Fact]
        public void GetMonthsAvgValuation_MultiProducts_ReturnsMonthDataCollection()
        {

            #region Arrange

            var products = new List<Product>()
            {
                new Product
                {
                    Id = 1,
                    IsDeleted = false,
                    Name = "Vyrobek1",
                    Price = 256

                },

                new Product
                {
                    Id = 2,
                    IsDeleted = false,
                    Name = "Vyrobek2",
                    Price = 20

                }
            };
                
            var mockDbSet = MockHelper.GetMockDbSet<Product>(products);

            var monthdata = new List<MonthBaseDto>
            {
                new MonthBaseDto
                {
                    MonthId = 5,
                    ProductsIds = new List<int>
                    {
                        1, 2
                    }
                }
            };

            #endregion

            #region Act



            var res = MonthStatsHelper.GetMonthsAvgValuation(monthdata, mockDbSet.Object);

            var avgResult = 0;

            foreach (var customerAvgValuationDto in res)
            {
                avgResult += customerAvgValuationDto.TotalSum;
            }

            #endregion

            #region Assert
            var expectedResult = 138;
            Assert.Equal(expectedResult, avgResult);
            #endregion
        }


        [Fact]
        public void GetMonthsSummaryValuation_MultipleProducts_ReturnsMonthsDataCollection()
        {

            #region Arrange

            var products = new List<Product>()
            {
                new Product
                {
                    Id = 1,
                    IsDeleted = false,
                    Name = "Vyrobek1",
                    Price = 256

                },

                new Product
                {
                    Id = 2,
                    IsDeleted = false,
                    Name = "Vyrobek2",
                    Price = 20

                }
            };

            var mockDbSet = MockHelper.GetMockDbSet<Product>(products);

            var monthdata = new List<MonthBaseDto>
            {
                new MonthBaseDto
                {
                    MonthId = 5,
                    ProductsIds = new List<int>
                    {
                        1, 2
                    }
                }
            };

            #endregion

            #region Act



            var res = MonthStatsHelper.GetMonthsSumValuation(monthdata, mockDbSet.Object);

            var sumResult = 0;

            foreach (var customerAvgValuationDto in res)
            {
                sumResult += customerAvgValuationDto.TotalSum;
            }

            #endregion

            #region Assert

            var expectedResult = 276;
            Assert.Equal(expectedResult, sumResult);

            #endregion
        }

    }
}
