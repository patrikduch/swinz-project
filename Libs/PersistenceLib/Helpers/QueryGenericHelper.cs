//-----------------------------------------------------------------------
// <copyright file="QueryGenericHelper.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace PersistenceLib.Helpers
{
    using System;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Helper for creation of generic querying
    /// </summary>
    public static class QueryGenericHelper
    {
        /// <summary>
        /// Get last entity based on generic parameter
        /// </summary>
        /// <returns>Concrete entity from parameter T</returns>
        public  static  T GetLastEntity<T>(DbSet<T> entity) where T : class
        {
            if (entity == null) throw new ArgumentNullException(nameof(entity));

            return entity.LastOrDefault();
        }
    }
}
