//-----------------------------------------------------------------------
// <copyright file="Paginator.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System;
using PaginationLib.Const;

namespace PaginationLib
{
    /// <summary>
    /// Pagination implementation
    /// </summary>
    public class Paginator
    {
        /// <summary>
        /// Get interval values for specific page number
        /// </summary>
        /// <param name="paginationTransfer">Encapsulation of paginationTransfer properties into object</param>
        /// <returns></returns>
        public static PaginatorResult GetPageInterval(PaginationTransferObject paginationTransfer)
        {
            // Result values
            int pageFrom;

            if (paginationTransfer.PageIdentifier == 1)
            {
                pageFrom = 0;
            }
            else
            {
                pageFrom = ((paginationTransfer.PageIdentifier - 1) * PaginationConfig.PAGE_SIZE);
            }

            // Returns two value result structure
            return new PaginatorResult
            {
                From = pageFrom,
                To = PaginationConfig.PAGE_SIZE
            };
        }


        /// <summary>
        /// Get total number of pages
        /// </summary>
        /// <param name="collectionCount">Size of provided collection</param>
        /// <returns></returns>
        public static int GetPageCount(int collectionCount)
        {

            float itemsCount = collectionCount;
            var pageCount = 0;

            if (itemsCount != 0)
            {
                itemsCount = (float) ((float)itemsCount / 5.0);


                if ((itemsCount % 1 < 0.5 || itemsCount % 1 == 0.5) && itemsCount % 1 != 0) itemsCount++;
                pageCount = (int) Math.Round(itemsCount);
            }


            return pageCount;
        
        }
    }
}
