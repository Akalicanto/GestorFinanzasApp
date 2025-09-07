using Microsoft.EntityFrameworkCore;
// using GestorFinanzasApp.Server.Models; // comentado hasta que tenga modelos

namespace GestorFinanzasApp.Server.Data
{
    public class GestorFinanzasDbContext : DbContext
    {
        public GestorFinanzasDbContext(DbContextOptions<GestorFinanzasDbContext> options)
            : base(options) { }
    }
}
