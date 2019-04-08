

using System;
using System.Collections.Generic;
using OrderApi.Dto;
using PersistenceLib.Domains.OrderApi;

namespace OrderApi.Helpers.LINQ
{
    /// <summary>
    /// Extension for LINQ querying under Order Repository
    /// </summary>
    public static class OrderQueryHelper
    {
        public static string Test(this String s)
        {
            return "";
        }


        public static IEnumerable<OrderListDto> ToOrderListDto(this List<Order> collection)
        {
            foreach (var VARIABLE in collection)
            {
                yield return new OrderListDto
                {
                    Id = VARIABLE.Id,
                    CreationDate = VARIABLE.CreationDate
                };
            }
        }


    }
}
