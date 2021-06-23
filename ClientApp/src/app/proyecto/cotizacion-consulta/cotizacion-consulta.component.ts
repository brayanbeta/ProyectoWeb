import { Component, OnInit } from '@angular/core';
import { CotizacionService } from 'src/app/services/cotizacion.service'
import { Cotizacion } from 'src/app/proyecto/models/cotizacion';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cotizacion-consulta',
  templateUrl: './cotizacion-consulta.component.html',
  styleUrls: ['./cotizacion-consulta.component.css']
})
export class CotizacionConsultaComponent implements OnInit {
  cotizacion: Cotizacion;
  stask: string;
  constructor(
    private cotizacionService: CotizacionService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() {
      this.get();
    }
  

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.cotizacionService.get(id)
      .subscribe(hero => this.cotizacion = hero);
  }
  update(): void {
    this.cotizacionService.update(this.cotizacion)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back;
  }
}
