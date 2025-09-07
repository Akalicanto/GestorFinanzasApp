using Zentro.Server.Enums;

namespace Zentro.Server.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public int BankAccountId { get; set; }
        public TransactionType Type { get; set; }
        public TransactionStatus Status { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
