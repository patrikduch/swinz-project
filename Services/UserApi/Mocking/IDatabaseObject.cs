using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace UserApi.Mocking
{
    public interface IDatabaseObject
    {
        DbContext DbContext { get; set; }

    }
}
