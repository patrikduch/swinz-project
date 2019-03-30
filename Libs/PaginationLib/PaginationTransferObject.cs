//-----------------------------------------------------------------------
// <copyright file="PaginationTransferObject.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace PaginationLib
{
    /// <summary>
    /// 
    /// </summary>
    public class PaginationTransferObject
    {
        /// <summary>
        /// Gets or sets page`s identifier
        /// </summary>
        public int PageIdentifier { get; set; }

        /// <summary>
        /// Gets page size
        /// </summary>
        public int PageSize { get; } = 5;
    }
}
