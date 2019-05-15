using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderApi.Helpers.Fee
{
    public static class FeePercentageHelper
    {
        public static decimal ConvertToPercentage(decimal input, decimal percentDivider)
        {
            return (percentDivider / 100) * input;
        }
    }
}
