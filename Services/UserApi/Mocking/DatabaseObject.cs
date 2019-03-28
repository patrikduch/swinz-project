using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace UserApi.Mocking
{
    public class DatabaseObject : IDatabaseObject
    {
        public DbContext DbContext { get; set; }
    }
}
