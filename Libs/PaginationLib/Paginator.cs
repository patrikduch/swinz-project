//-----------------------------------------------------------------------
// <copyright file="Paginator.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System;

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
            int pageTo;

            if (paginationTransfer.PageIdentifier == 1)
            {
                pageFrom = 0;
                pageTo = paginationTransfer.PageSize;
            }
            else
            {
                pageFrom = ((paginationTransfer.PageIdentifier - 1) * paginationTransfer.PageSize);
                pageTo = paginationTransfer.PageSize;

            }

            // Returns two value result structure
            return new PaginatorResult
            {
                From = pageFrom,
                To = pageTo
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



            /*

                        var itemsCount = collectionCount;
                        var pageCount = 0;

                        if (itemsCount % 5 == 0)
                        {
                            pageCount++;

                            return pageCount;
                        }

                        while (itemsCount != 0)
                        {
                            itemsCount /= 5;
                            pageCount++;
                        }*/

            return pageCount;
        }
    }
}
