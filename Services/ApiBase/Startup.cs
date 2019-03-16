//-----------------------------------------------------------------------
// <copyright file="Startup.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

using Newtonsoft.Json;
using UserApi.Contexts;
using UserApi.Interfaces;
using UserApi.Repositories;

namespace ApiBase
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;

    /// <summary>
    /// Init configuration setup of all REST services
    /// </summary>
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1)
                .AddApplicationPart(typeof(ProductApi.Controllers.ProductsController).Assembly)
                .AddApplicationPart(typeof(UserApi.Controllers.UsersController).Assembly).
                AddJsonOptions(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                })
                .AddControllersAsServices();

            // Entity framework context setup
            var conn = Configuration.GetConnectionString("Default");
            services.AddDbContext<UserContext>(options => options.UseSqlServer(conn));

            // Register repositories
            services.AddScoped<IUserRepository, UserRepository>();

            // Cors services
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()));


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // CORS
                app.UseCors(b => b.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            }

            app.UseMvc();
        }
    }
}
