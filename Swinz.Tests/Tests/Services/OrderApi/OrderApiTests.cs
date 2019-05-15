using System;
using System.Collections.Generic;
using System.Text;
using OrderApi.Helpers.Fee;
using Xunit;

namespace Swinz.Tests.Services.OrderApi
{
    
    public class OrderApiTests
    {
        [Fact]
        public void GetPercentValueFromFeeInput_NonZeroValue_ReturnsPercentValue()
        {
            var res = FeePercentageHelper.ConvertToPercentage(20,5);


            Assert.Equal((decimal) 1.00, res);


        }
    }
}
