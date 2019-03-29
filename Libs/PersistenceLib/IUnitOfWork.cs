// ----------------------------------------------------------------------
// <copyright file="IUnitOfWork.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using System.Threading.Tasks;

namespace PersistenceLib
{
    using System;

    /// <summary>
    /// Contract for generic unit of work
    /// </summary>
    public interface IUnitOfWork : IDisposable
    {
        Task<int> Complete();
    }
}
