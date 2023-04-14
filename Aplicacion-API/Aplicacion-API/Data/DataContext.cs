using Microsoft.EntityFrameworkCore;
using System.Data.Entity;

namespace Aplicacion_API.Data
{
    public class DataContext: DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Aplicacion> Aplicaciones => Set<Aplicacion>();


    }
}
