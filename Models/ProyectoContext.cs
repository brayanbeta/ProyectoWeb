using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoWeb.Models
{
    public class ProyectoContext : IdentityDbContext
    {
        public ProyectoContext(DbContextOptions<ProyectoContext> options) :
        base(options)
        {
        }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cotizacion> Cotizaciones { get; set; }
        public DbSet<DetalleCotizacion> DetalleCotizaciones { get; set; }
    }
}