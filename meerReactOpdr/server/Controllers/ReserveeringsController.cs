using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("/api/reserveering")]
public class ReserveringsController : ControllerBase
{
    private static List<Reserveering> _reserveeringen = new List<Reserveering>();
    public void AddToList()
    {
        _reserveeringen.Add(new Reserveering("mail@info.com", DateTime.Today, 5));
        _reserveeringen.Add(new Reserveering("mail@info.com", new DateTime(2022, 12, 15), 5));
        _reserveeringen.Add(new Reserveering("mail@info.com", new DateTime(2022, 12, 16), 10));
    }

    private readonly ILogger<ReserveringsController> _logger;

    public ReserveringsController(ILogger<ReserveringsController> logger)
    {
        if(_reserveeringen.Count() == 0){
            AddToList();
        }
        _logger = logger;
    }
    [HttpGet]
    public ActionResult<List<Reserveering>> Get()
    {
        return Ok(_reserveeringen);
    }

    [HttpPost]
    public async Task<ActionResult<Reserveering>> Post([FromBody] Reserveering_Api reserveering)
    {
         if (reserveering == null)
         {
             return BadRequest();
         }
         if (reserveering.aantalMensen < 1 || reserveering.aantalMensen is null)
         {
             return BadRequest("Er moet ten minste een persoon bij de reserveering.");
         }
         if (reserveering.datum == "" || reserveering.datum is null)
         {
             return BadRequest("Er moet een datum ingevuld zijn");
         }
         if (Convert.ToDateTime(reserveering.datum) < DateTime.Today)
         {
             return BadRequest("Je kan geen reserveering maken in het verleden.");
         }

         var reserveeringenOpDeDatum = _reserveeringen.Where(r => r.Datum.ToString("MM/d/yyyy") == reserveering.datum).Count();

         if (reserveeringenOpDeDatum + reserveering.aantalMensen >= 10)
         {
             return BadRequest("Er kunnen maximaal 10 mensen per dag binnen.");
         }

        await Task.Run(() =>
        {
            Reserveering newReserveering = new Reserveering(
             reserveering.email,
             Convert.ToDateTime(reserveering.datum),
             (int)reserveering.aantalMensen
             );
            _reserveeringen.Add(newReserveering);
        });

        return Ok(reserveering);
       

    }

    [HttpGet("datum")]
    public async Task<ActionResult<int>> getDatum([FromHeader(Name = "datum")]string datum){
        var ticketsBeschikbaar = 10;
        try{
           var reserveeringenOpDeDatum = _reserveeringen.Where(r => r.Datum.ToString("MM/d/yyyy") == datum);
           if(reserveeringenOpDeDatum.Count() == 0){
                return Ok(ticketsBeschikbaar);
           }
            await Task.Run(() =>
            {
                foreach (var tickets in reserveeringenOpDeDatum)
                {
                    ticketsBeschikbaar -= tickets.AantalMensen;
                }
            });
                return Ok(ticketsBeschikbaar);

        }
        catch{
            return Ok(ticketsBeschikbaar);
        }
    }
}
