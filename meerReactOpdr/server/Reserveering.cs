public class Reserveering
{
    public Reserveering(string email, DateTime datum, int aantalMensen)
    {
        lastId++;
        Id = lastId;
        Email = email;
        Datum = datum;
        AantalMensen = aantalMensen;
    }
    public static int lastId = 0;
    public int Id{ get; set; }

    public string Email { get; set; }
    public int AantalMensen { get; set; }
    public DateTime Datum { get; set; }
}

public class Reserveering_Api{
    public string email { get; set; }
    public int aantalMensen { get; set; }
    public DateTime datum { get; set; }
}
