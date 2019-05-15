

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

        public static IEnumerable<OrderListDto> ToOrderListDto(this List<Order> collection)
        {
            foreach (var order in collection)
            {
                yield return new OrderListDto
                {
                    Id = order.Id,
                    CreationDate = order.CreationDate,
                    CustomerId =  order.CustomerId,
                    Discount = order.Discount.DiscountValue
                };
            }
        }


    }
}
