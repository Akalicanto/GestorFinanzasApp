using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Zentro.Server.Models;
using Zentro.Server.Services;

namespace Zentro.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        #region Login

        /// <summary>
        /// Inicia sesion de un usuario
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLogin request)
        {
            try
            {
                if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
                    return BadRequest("Email y contraseña son requeridos.");

                var token = await _userService.Login(request.Email, request.Password);

                if (token == null)
                    return Unauthorized("Usuario o contrase�a incorrectos.");

                return Ok(new { token });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        #endregion

        #region CreateorUpdate

        /// <summary>
        /// Crea y actualiza un usuario
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<bool>> CreateOrUpdate([FromBody] User user)
        {
            try
            {
                if (string.IsNullOrEmpty(user.Email) || string.IsNullOrEmpty(user.Password))
                    return BadRequest("Email y contraseña son requeridos.");

                bool result = await _userService.CreateOrUpdate(user);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        #endregion

    }
}
