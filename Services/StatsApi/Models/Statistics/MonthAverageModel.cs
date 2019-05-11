using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StatsApi.Models.Statistics
{
    public class MonthAverageModel
    {
        public int MonthId { get; set; }

        public List<int> ProductsIds { get; set; }

        public int AverageSum { get; set; }
    }
}
