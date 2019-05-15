//-----------------------------------------------------------------------
// <copyright file="CustomerSummaryDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Dto
{
    public class CustomerSummaryDto
    {
        /// <summary>
        /// Customer count
        /// </summary>
        public int CustomerCount { get; set; }

        /// <summary>
        /// Product count
        /// </summary>
        public int ProductCount { get; set; }

        /// <summary>
        /// Income of current year
        /// </summary>
        public decimal LatestIncome { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int SoldCount { get; set; }
    }
}
