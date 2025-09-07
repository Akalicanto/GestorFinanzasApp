using Microsoft.EntityFrameworkCore;
using Zentro.Server.Enums;
using Zentro.Server.Models;

namespace Zentro.Server.Data
{
    public class ZentroDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        public ZentroDbContext(DbContextOptions<ZentroDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Convertir enums a string en la BDD
            modelBuilder.Entity<BankAccount>()
                .Property(b => b.Type)
                .HasConversion(
                    v => v.ToString(),
                    v => Enum.Parse<AccountType>(v)
                );

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.Property(t => t.Type)
                      .HasConversion(
                          v => v.ToString(),
                          v => Enum.Parse<TransactionType>(v)
                      );

                entity.Property(t => t.Status)
                      .HasConversion(
                          v => v.ToString(),
                          v => Enum.Parse<TransactionStatus>(v)
                      );
            });
        }
    }
}
