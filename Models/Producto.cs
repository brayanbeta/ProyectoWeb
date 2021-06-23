using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
namespace ProyectoWeb.Models
{
    public class Producto
    {
        [Key]
        public string CodigoProducto { get; set; }
        [Required]
        public string ImagenProducto { get; set; }
        [Required]
        public string NombreProducto { get; set; }
        [Required]
        public double CostoProducto { get; set; }
        [Required]
        public int CantidadProducto { get; set; }
        [Required]
        public string PresentacionProducto { get; set; }
        [Required]
        public string EstadoProducto { get; set; }
        [Required]
        public string CategoriaProducto { get; set; }
    }
}