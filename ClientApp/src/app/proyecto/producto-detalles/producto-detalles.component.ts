import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service'
import { Producto } from 'src/app/proyecto/models/producto';
import { Location } from '@angular/common';
import { CotizacionModuleComponent } from 'src/app/proyecto/cotizacion-module/cotizacion-module.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {

  producto: Producto;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private modalService: NgbModal,
    private location: Location,
    private authorizeService: AuthService
  ) { }

  ngOnInit() {
    this.get();
    this.guardarIdProd();
  }
  open(){
    this.modalService.open(CotizacionModuleComponent, { size: 'lg' });
}
  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.productoService.get(id)
      .subscribe(hero => this.producto = hero);
  }

  goBack(): void {
    this.location.back();
  }

  guardarIdProd()
  {
      this.authorizeService.productoG(this.route.snapshot.paramMap.get('id'));
  }

}
