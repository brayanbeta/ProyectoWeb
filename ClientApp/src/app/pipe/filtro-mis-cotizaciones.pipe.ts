import { Pipe, PipeTransform } from '@angular/core';
import { Cotizacion } from 'src/app/proyecto/models/cotizacion';

@Pipe({
  name: 'filtroMisCotizaciones'
})
export class FiltroMisCotizacionesPipe implements PipeTransform {

  transform(cotizaciones: Cotizacion[], searchText: string) {
    if (searchText == null) return cotizaciones;
    return cotizaciones.filter(cotizacion =>
        cotizacion.identificacionClienteCotizacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}

}
