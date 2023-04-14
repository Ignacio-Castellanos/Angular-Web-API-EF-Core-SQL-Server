using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Aplicacion_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AplicacionController : ControllerBase
    {
        [HttpGet]


        public async Task<ActionResult<List<Aplicacion>>> GetAplicacion()

        {
            return new List<Aplicacion>
            {
                new Aplicacion
                {
                    Name = "PC",
                    Price = "100",
                    Code = "123",
                } 
            };


        }
    }

}
