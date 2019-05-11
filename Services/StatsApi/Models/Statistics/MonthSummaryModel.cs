using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StatsApi.Models.Statistics
{
    public class MonthSummaryModel
    {
        public int MonthId { get; set; }

        public List<int> ProductsIds { get; set; }

        public int Sum { get; set; }
    }
}
