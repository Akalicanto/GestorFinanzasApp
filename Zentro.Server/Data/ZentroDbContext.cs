using Microsoft.EntityFrameworkCore;
// using Zentro.Server.Models; // comentado hasta que tenga modelos

namespace Zentro.Server.Data
{
    public class ZentroDbContext : DbContext
    {
        public ZentroDbContext(DbContextOptions<ZentroDbContext> options)
            : base(options) { }
    }
}
