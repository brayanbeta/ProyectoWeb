import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/proyecto/models/usuario';
import { Location } from '@angular/common';
import { CotizacionService } from 'src/app/services/cotizacion.service'
import { DetalleCotizacionService } from 'src/app/services/detalle-cotizacion.service'
import { DetalleCotizacion } from 'src/app/proyecto/models/detalle-cotizacion';
import { ProductoService } from 'src/app/services/producto.service'
import { Producto } from 'src/app/proyecto/models/producto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cotizacion } from 'src/app/proyecto/models/cotizacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-finalizar-cotizacion',
  templateUrl: './finalizar-cotizacion.component.html',
  styleUrls: ['./finalizar-cotizacion.component.css']
})
export class FinalizarCotizacionComponent implements OnInit {
  usuario: Usuario;
  searchText: string;
  stask: string;
  cotizacion : Cotizacion;
  detalles : DetalleCotizacion[];
  constructor(private location: Location,private route: ActivatedRoute,private detalleCotizacionService:DetalleCotizacionService,private productoService: ProductoService,private usuarioService: UsuarioService,private cotizacionService: CotizacionService,private formBuilder: FormBuilder,private authorizeService: AuthService) { }
  anuncio : string;
  estado : string;
  ngOnInit() {
    this.estado = "NO CALCULADO";
    this.searchText = this.route.snapshot.paramMap.get('id');
    this.get();
    this.getAll();
    this.metodo();
  }

  metodo(): void {
    this.detalles.forEach(element => {
      if(element.codigoCotizacion == this.cotizacion.codigoCotizacion){
        this.anuncio = "COTIZACION Calculada!!, puede finalizar";
        if(this.estado == "NO CALCULADO"){
          this.cotizacion.toltalPagarCotizacion = this.cotizacion.toltalPagarCotizacion + element.precioProducto;
        }
      }
    });
    this.estado="CALCULADO";

  }

  update(): void {
    if(this.estado=="NO CALCULADO"){
      this.anuncio = "RECUERDE QUE DEBE CALCULAR PRIMERO!";
    }else{
      this.cotizacionService.update(this.cotizacion).subscribe(() => this.goBack());
      this.finalizar();
    }
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.cotizacionService.get(id)
      .subscribe(hero => this.cotizacion = hero);
      this.anuncio = "Debe darle en calcular para finalizar su COTIZACION!";
  }

  goBack(): void {
    this.location.go("/home");
    this.location.forward();
  }

  getAll() {
    this.detalleCotizacionService.getAll().subscribe(detalle => this.detalles = detalle);
    this.metodo();
  }

  finalizar()
  {
      this.authorizeService.cotizacion("","");
  }
}
