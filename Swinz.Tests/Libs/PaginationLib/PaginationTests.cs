//-----------------------------------------------------------------------
// <copyright file="PaginationTests.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using PaginationLib;

namespace Swinz.Tests.Libs.PaginationLib
{
    using Xunit;

    /// <summary>
    /// Unit tests for pagination library
    /// </summary>
    public class PaginationTests
    {
        [Fact]
        public void GetPage_IdentifierEqualToOne_ReturnsZeroToFive()
        {
            var pagination = new PaginationTransferObject {PageIdentifier = 1};
            var result = Paginator.GetPage(pagination);

            var expected = new PaginatorResult {From = 0, To = 5};

            Assert.Equal(result, expected);

        }

        [Fact]
        public void GetPage_IdentifierNotEqualToOne_ReturnsFiveToTen()
        {
            var pagination = new PaginationTransferObject { PageIdentifier = 2 };
            var result = Paginator.GetPage(pagination);

            var expected = new PaginatorResult { From = 5, To = 10 };

            Assert.Equal(result, expected);
        }


        [Fact]
        public void GetPage_IdentifierNotEqualToOne_ReturnsTenToFifteen()
        {
            var pagination = new PaginationTransferObject { PageIdentifier = 3 };
            var result = Paginator.GetPage(pagination);

            var expected = new PaginatorResult { From = 10, To = 15 };

            Assert.Equal(result, expected);
        }
    }
}
