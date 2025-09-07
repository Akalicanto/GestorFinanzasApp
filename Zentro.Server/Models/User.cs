namespace Zentro.Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public List<BankAccount> BankAccounts { get; set; }
    }
}
