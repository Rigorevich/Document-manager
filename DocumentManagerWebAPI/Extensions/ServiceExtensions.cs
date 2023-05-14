using DocumentManagerWebAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace DocumentManagerWebAPI.Extensions;

public static class ServiceExtensions
{
    public static IApplicationBuilder ConfigureAutoMigration(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices
            .GetRequiredService<IServiceScopeFactory>()
            .CreateScope();
        
        var context = scope.ServiceProvider.GetRequiredService<DocumentManagerContext>();
        context.Database.Migrate();

        return app;
    }
}