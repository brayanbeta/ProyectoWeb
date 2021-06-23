import { Component, OnInit } from '@angular/core';
import { DetalleCotizacion } from 'src/app/proyecto/models/detalle-cotizacion';
import { DetalleCotizacionService } from 'src/app/services/detalle-cotizacion.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalles-mis-cotizaciones',
  templateUrl: './detalles-mis-cotizaciones.component.html',
  styleUrls: ['./detalles-mis-cotizaciones.component.css']
})
export class DetallesMisCotizacionesComponent implements OnInit {
  searchText: string;

  detalles : DetalleCotizacion[];
  constructor(private detalleCotizacionService:DetalleCotizacionService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getAll();
    this.searchText = this.route.snapshot.paramMap.get('id');
  }

  getAll() {
    this.detalleCotizacionService.getAll().subscribe(detalles  => this.detalles = detalles);
  }
  goBack(): void {
    this.location.back();
  }
}
