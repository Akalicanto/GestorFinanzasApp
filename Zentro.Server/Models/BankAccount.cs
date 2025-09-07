using Zentro.Server.Enums;

namespace Zentro.Server.Models
{
    public class BankAccount
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Bank { get; set; }
        public AccountType Type { get; set; }
        public decimal Balance { get; set; }
        public decimal? InterestRate { get; set; }
        public List<Transaction> Transactions { get; set; }
    }
}
