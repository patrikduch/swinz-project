//-----------------------------------------------------------------------
// <copyright file="Paginator.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

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
        public static PaginatorResult GetPage(PaginationTransferObject paginationTransfer)
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
                pageFrom = (paginationTransfer.PageIdentifier - 1) * paginationTransfer.PageSize;
                pageTo = (paginationTransfer.PageIdentifier * paginationTransfer.PageSize);

            }

            // Returns two value result structure
            return new PaginatorResult
            {
                From = pageFrom,
                To = pageTo
            };
        }
    }
}
