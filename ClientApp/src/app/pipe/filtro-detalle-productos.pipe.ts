import { Pipe, PipeTransform } from '@angular/core';
import { DetalleCotizacion } from 'src/app/proyecto/models/detalle-cotizacion';

@Pipe({
  name: 'filtroDetalleProductos'
})
export class FiltroDetalleProductosPipe implements PipeTransform {

  transform(detalleCotizaciones: DetalleCotizacion[], searchText: string) {
    if (searchText == null) return detalleCotizaciones;
    return detalleCotizaciones.filter(detalleCotizacion =>
      detalleCotizacion.codigoCotizacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}
