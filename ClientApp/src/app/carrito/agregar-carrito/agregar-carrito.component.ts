import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service'
import { Producto } from 'src/app/proyecto/models/producto';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CotizacionService } from 'src/app/services/cotizacion.service'
import { DetalleCotizacionService } from 'src/app/services/detalle-cotizacion.service'
import { Cotizacion } from 'src/app/proyecto/models/cotizacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/proyecto/models/usuario';
import { DetalleCotizacion } from 'src/app/proyecto/models/detalle-cotizacion';

@Component({
  selector: 'app-agregar-carrito',
  templateUrl: './agregar-carrito.component.html',
  styleUrls: ['./agregar-carrito.component.css']
})
export class AgregarCarritoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  usuario:Usuario;
  pruebas : string;
  producto: Producto;
  codigoNuevo: string;
  total: number;
  aviso: string;
  totalPagar:number;
  searchText: string;
  cotizacions:Cotizacion[];
  detalleCotizacion:DetalleCotizacion
  detalleCotizacions:DetalleCotizacion[];
  constructor(private route: ActivatedRoute,private detalleCotizacionService:DetalleCotizacionService,private productoService: ProductoService,private usuarioService: UsuarioService,private cotizacionService: CotizacionService,private formBuilder: FormBuilder,private authorizeService: AuthService) { }
  cotizacion: Cotizacion;

  ngOnInit() {
    this.pruebas="Crear Cotizacion";
    if(this.cotizacionIdG().trim()==""){
      this.searchText = "99999999999";
    }else{
      this.searchText = this.cotizacionIdG();
    }
    this.getProducto();
    this.getAll();
    this.get();
    if (this.estadoCoti() == "OCUPADO"){
      this.aviso = "YA TIENE UNA COTIZACION";
      this.pruebas="AÑADIR PRODUCTO";
    }else{
      this.create();
      this.aviso = "SALGA Y VUELVA A AÑADIR EL PRODUCTO";
      this.pruebas="AÑADIR PRODUCTO";
    }
  }

  onReset() {
    this.aviso = "Ya puede cerrar esta ventana......"
  }

  create() {
    if (this.estadoCoti() == "OCUPADO"){
      this.aviso = "YA TIENE UNA COTIZACION, PUEDE AÑADIR LOS PRODUCTOS";
      this.addProduct();
    }else{
      this.total = this.cotizacions.length+1;
      this.codigoNuevo = "COTIZACION-" + this.total;
      this.cotizacion = new Cotizacion();
      this.cotizacion.codigoCotizacion = this.codigoNuevo;
      this.cotizacion.identificacionClienteCotizacion = this.usuario.identificacion;
      this.cotizacion.fechaEntregaCotizacion = "01/01/1990";
      this.cotizacion.horaEntregaCotizacion = "00:00 pm"
      this.cotizacion.lugarEntregaCotizacion = "Not Defined";
      this.cotizacion.toltalPagarCotizacion=0;
      this.cotizacion.estadoCotirzacion = "NO ATENDIDA";
      this.cotizacionService.post(this.cotizacion).subscribe(c => {
          if (c != null) {
            console.log('Se creo una cotizacion')
            this.cotizacion1();
          }
      });
    }
  }

  addProduct(){
    this.detalleCotizacion = new DetalleCotizacion();
    this.detalleCotizacion.codigoCotizacion = this.cotizacionIdG();
    this.detalleCotizacion.codigoProducto = this.producto.codigoProducto;
    this.detalleCotizacion.cantidadProducto = 1;
    this.detalleCotizacion.presentacionProducto = this.producto.presentacionProducto;
    this.detalleCotizacion.precioProducto = this.producto.costoProducto;
    this.detalleCotizacion.total=this.producto.costoProducto;
    this.detalleCotizacionService.post(this.detalleCotizacion).subscribe(c => {
        if (c != null) {
          console.log('Se creo una detalle')
          this.getAll();
        }
    });
  }

  userName(): string {
    return this.authorizeService.getUserName();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }

  estadoCoti(): string {
    return this.authorizeService.getNoMas();
  }

  productoIdG(): string{
    return this.authorizeService.getProductoG();
  }

  cotizacionIdG(): string{
    return this.authorizeService.getCotizacion();
  }
  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.usuarioService.get(this.userName())
      .subscribe(hero => this.usuario = hero);
  }

  getProducto(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.productoService.get(this.productoIdG())
      .subscribe(hero => this.producto = hero);
  }
  getAll() {
    this.cotizacionService.getAll().subscribe(cotizacions => this.cotizacions = cotizacions);
    console.log(JSON.stringify(this.cotizacions));
    this.detalleCotizacionService.getAll().subscribe(detalleCotizacions  => this.detalleCotizacions = detalleCotizacions);
  }



  cotizacion1()
  {
      this.authorizeService.cotizacion(this.codigoNuevo,"OCUPADO");
  }
  


}
