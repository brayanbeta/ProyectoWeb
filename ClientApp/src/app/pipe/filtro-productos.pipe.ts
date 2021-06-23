import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from 'src/app/proyecto/models/producto';
@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: Producto[], searchText: string) {
    if (searchText == null) return productos;
    return productos.filter(producto =>
        producto.nombreProducto.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        producto.codigoProducto.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
