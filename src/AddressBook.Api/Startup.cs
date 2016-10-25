using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.Swagger.Model;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace AddressBook.Api
{
    public class Startup
    {
        private string _contenctRoot = "";
        public static string ConnectionString { get; private set; }
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

            _contenctRoot = env.ContentRootPath;



        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin", builder =>
                {
                    builder.AllowAnyOrigin() //allowing any origin
                            .AllowAnyMethod() //allowing any method
                            .AllowAnyHeader();//allowing any header
                });
            });



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            //app.UseSwagger();
            //app.UseSwaggerUi();
            app.UseMvc();
            app.UseCors("AllowAnyOrigin");
            if (env.IsDevelopment())
            {
                string conn = Configuration.GetConnectionString("DefaultConnection");
                if (conn.Contains("%CONTENTROOTPATH%"))
                {
                    conn = conn.Replace("%CONTENTROOTPATH%", _contenctRoot);
                    ConnectionString = conn;
                }
            }
            else
            {
                ConnectionString = Configuration.GetConnectionString("AzureConnection");
            }



        }

        private string GetXmlCommentsPath()
        {
            var app = PlatformServices.Default.Application;
            return System.IO.Path.Combine(app.ApplicationBasePath, "AddressBook.Api.xml");
        }
    }
}
