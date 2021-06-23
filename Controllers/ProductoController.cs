using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using ProyectoWeb.Models;
using System;
using System.Collections;


namespace ProyectoWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {

        private readonly ProyectoContext _context;
        public ProductoController(ProyectoContext context)
        {   
            _context = context;
        }


        [HttpGet]
        public IEnumerable<Producto> Get()
        {
            return _context.Productos;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProductoItem(string id)
        {
            var producto = await _context.Productos.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }
            return producto;
        }

        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            var item = await _context.Productos.FindAsync(producto.CodigoProducto);
            if (item != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Productos.Add(producto);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProductoItem), new { id = producto.CodigoProducto }, producto);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductoItem(string id, Producto item)
        {
            if (id != item.CodigoProducto)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductoItem(string id)
        {
            var producto = await _context.Productos.FindAsync(id);
            if (producto == null)
            {
                return NotFound();
            }

            _context.Productos.Remove(producto);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}