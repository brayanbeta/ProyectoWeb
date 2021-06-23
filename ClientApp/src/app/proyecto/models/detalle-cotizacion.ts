import { Cotizacion } from "./cotizacion";

export class DetalleCotizacion extends Cotizacion{

    secuenciaNumeroDetalle: number;
    codigoCotizacion:string;
    codigoProducto:string;
    cantidadProducto: number;
    presentacionProducto: string;
    precioProducto: number;
    total: number;

}
