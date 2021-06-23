using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
namespace ProyectoWeb.Models
{
    public class Cotizacion
    {
        [Key]
        public string CodigoCotizacion { get; set; }
        [Required]
        public string IdentificacionClienteCotizacion { get; set; }
        [Required]
        public string FechaEntregaCotizacion { get; set; }
        [Required]
        public string HoraEntregaCotizacion { get; set; }
        [Required]
        public string LugarEntregaCotizacion { get; set; }
        [Required]
        public double ToltalPagarCotizacion { get; set; }
        [Required]
        public string EstadoCotirzacion { get; set; }
    }
}
