using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Zentro.Server.Data;
using Zentro.Server.Models;

namespace Zentro.Server.Services
{
    public class UserService
    {
        private readonly IConfiguration _config;
        private readonly ZentroDbContext _db;

        public UserService(
            IConfiguration config,
            ZentroDbContext db
        )
        {
            _config = config;
            _db = db;
        }

        #region Login

        public async Task<string?> Login(string email, string password)
        {
            var hash = HashPassword(password);

            User? user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email && u.Password == hash);

            if (user == null) return null;

            return GenerateToken(user);
        }

        #endregion

        #region Hash

        private string HashPassword(string password)
        {
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = SHA256.HashData(bytes);
            return Convert.ToHexString(hash);
        }

        #endregion

        #region Token

        private string GenerateToken(User user)
        {
            var jwtSettings = _config.GetSection("Jwt");

            var claims = new List<Claim>
            {
                new Claim("userId", user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("name", user.Name),
                new Claim("surname", user.Surname),
                new Claim(JwtRegisteredClaimNames.Birthdate, user.BirthDate.ToString("dd/MM/yyyy"))
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(int.Parse(jwtSettings["ExpireMinutes"]!)),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        #endregion
    }
}