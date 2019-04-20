
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
        public int LatestIncome { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public int SoldCount { get; set; }
    }
}
