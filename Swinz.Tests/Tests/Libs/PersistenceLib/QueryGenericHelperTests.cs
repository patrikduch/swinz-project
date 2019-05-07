using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Moq;
using PersistenceLib.Domains.UserApi;
using PersistenceLib.Helpers;
using Swinz.Tests.Helpers;
using UserApi.Contexts;
using Xunit;

namespace Swinz.Tests.Libs.PersistenceLib
{
    /// <summary>
    /// Unit tests for class QueryHelper
    /// </summary>
    public class QueryGenericHelperTests
    {
        [Fact]
        public void GetLastEntity__ReturnsGenericEntity()
        {
            // Arrange
            var ctx = new Mock<UserContext>();
            var users = new List<User>()
            {
                new User { Username = "Patrik", Id =  1},
                new User { Username = "ender", Id = 2}
            };

            var mockDbSet = MockHelper.GetMockDbSet<User>(users);
            ctx.Setup(c => c.Set<User>()).Returns(mockDbSet.Object);

            // Act
            var entity = QueryGenericHelper.GetLastEntity(mockDbSet.Object.AsQueryable() as DbSet<User>);

            // Assert
            Assert.Equal(2, entity.Id);
        }
    }
}
