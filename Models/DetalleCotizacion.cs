using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
namespace ProyectoWeb.Models
{
    public class DetalleCotizacion
    {
        [Key]
        public int SecuenciaNumeroDetalle { get; set; }
        [Required]
        public string CodigoCotizacion { get; set; }
        [Required]
        public string CodigoProducto { get; set; }
        [Required]
        public int CantidadProducto { get; set; }
        [Required]
        public string PresentacionProducto { get; set; }
        [Required]
        public double PrecioProducto { get; set; }
        [Required]
        public double Total { get; set; }
    }
}
