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

    [HttpPost]
    public ActionResult<Reserveering> Post([FromBody] Reserveering_Api reserveering)
    {
        
        if(reserveering == null)
        {
            return BadRequest();
        }
        if(reserveering.aantalMensen < 1){
            return BadRequest("er moet ten minste een persoon bij de reserveering.");
        }
        if(reserveering.datum < DateTime.Now){
            return BadRequest("Je kan geen reserveering maken in het verleden.");
        }

        var reserveeringenOpDeDatum = _reserveeringen.Where(r => r.Datum == reserveering.datum).Count();

        if(reserveeringenOpDeDatum + reserveering.aantalMensen > 10){
            return BadRequest("Er kunnen maximaal 10 mensen per dag binnen.");
        }
        
        Reserveering newReserveering = new Reserveering(
            reserveering.email,
             reserveering.datum,
              reserveering.aantalMensen
              );
        _reserveeringen.Add(newReserveering);
        return Ok(reserveering);
    }
}
