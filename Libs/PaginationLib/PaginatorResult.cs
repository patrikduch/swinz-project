//-----------------------------------------------------------------------
// <copyright file="PaginatorResult.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace PaginationLib
{
    /// <summary>
    /// Result structure for pagination
    /// </summary>
    public struct  PaginatorResult
    {
        /// <summary>
        /// Start of interval
        /// </summary>
        public int From;
        /// <summary>
        /// End of interval
        /// </summary>
        public int To;
    }
}
