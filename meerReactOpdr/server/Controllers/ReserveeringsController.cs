using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("/api/reserveering")]
public class ReserveringsController : ControllerBase
{
    private List<Reserveering> _reserveeringen = new List<Reserveering>();
    private void AddToList()
    {
        _reserveeringen.AddRange(new List<Reserveering>{
            new Reserveering("mail@info.com",DateTime.Today,5),
            new Reserveering("mail@info.com",new DateTime(2022,12,15),5),
            new Reserveering("mail@info.com",new DateTime(2022,12,16),10),
        });
    }

    private readonly ILogger<ReserveringsController> _logger;

    public ReserveringsController(ILogger<ReserveringsController> logger)
    {
        _logger = logger;
        AddToList();
    }
    [HttpGet]
    public ActionResult<List<Reserveering>> Get()
    {
        return Ok(_reserveeringen);
    }
}
