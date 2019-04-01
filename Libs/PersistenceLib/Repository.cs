// ----------------------------------------------------------------------
// <copyright file="Repository.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace PersistenceLib
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;

    /// <summary>
    /// Generic base repository class
    /// </summary>
    /// <typeparam name="TEntity">Type of repository entity</typeparam>
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        /// <summary>
        /// Reference to the current database context
        /// </summary>
        protected DbContext Context;

        /// <summary>
        /// Constructor for creating new instance of generic repository class
        /// </summary>
        /// <param name="context"></param>
        public Repository(DbContext context)
        {
            Context = context;
        }


        /// <summary>
        /// Get the result from specific entity based on condition
        /// </summary>
        /// <param name="predicate">Restriction condition</param>
        /// <returns></returns>
        public IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate);
        }

        /// <summary>
        /// Creation of new entry
        /// </summary>
        /// <param name="entity">Entity representation</param>
        public void Add(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
        }

        /// <summary>
        /// Addition
        /// </summary>
        /// <param name="entities"></param>
        public void AddRange(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().AddRange(entities);
        }

        /// <summary>
        /// Deletion operation of all entities
        /// </summary>
        /// <param name="entity">Single entity input</param>
        public void Remove(TEntity entity)
        {
            Context.Set<TEntity>().Remove(entity);
        }

        /// <summary>
        /// Deletion collection of entities
        /// </summary>
        /// <param name="entities">Collection of entities input</param>
        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().RemoveRange(entities);
        }

        /// <summary>
        /// Get all results from generic entity
        /// </summary>
        /// <returns>List of results</returns>
        async Task<IEnumerable<TEntity>> IRepository<TEntity>.GetAll()
        {
            return await Context.Set<TEntity>().ToListAsync();
        }

        /// <summary>
        /// Get entry by identifier
        /// </summary>
        /// <param name="id">identifier</param>
        /// <returns>Entity</returns>
        async Task<TEntity> IRepository<TEntity>.Get(int id)
        {
            return  await Context.Set<TEntity>().FindAsync(id);
        }

    }
}
