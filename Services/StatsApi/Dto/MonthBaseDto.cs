//-----------------------------------------------------------------------
// <copyright file="MontBaseDto.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>

namespace StatsApi.Dto
{
    using System;
    using System.Collections.Generic;

    public class MonthBaseDto : IComparable<MonthBaseDto>
    {
        public int MonthId { get; set; }

        public List<int> ProductsIds { get; set; }


        public int CompareTo(MonthBaseDto other)
        {
            if (ReferenceEquals(this, other)) return 0;
            if (ReferenceEquals(null, other)) return 1;
            return MonthId.CompareTo(other.MonthId);
        }
    }
}
