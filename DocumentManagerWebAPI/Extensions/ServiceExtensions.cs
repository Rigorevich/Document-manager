using DocumentManagerWebAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace DocumentManagerWebAPI.Extensions;

public static class ServiceExtensions
{
    public static IServiceCollection ConfigureCors(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy", builder =>
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
        });
        
        return services;
    }
    
    public static IApplicationBuilder MigrateDatabase<T>(this IApplicationBuilder app) where T : DbContext
    {
        using var scope = app.ApplicationServices
            .GetRequiredService<IServiceScopeFactory>()
            .CreateScope();
        
        var context = scope.ServiceProvider.GetRequiredService<T>();
        try
        {
            context.Database.Migrate();
        }
        catch (Exception ex)
        {
            var logger = scope.ServiceProvider.GetRequiredService<ILogger>();
            logger.LogError(ex, "An error occurred while migrating the database");
        }

        return app;
    }
}