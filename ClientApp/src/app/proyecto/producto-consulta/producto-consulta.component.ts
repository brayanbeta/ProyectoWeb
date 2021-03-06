import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto-consulta',
  templateUrl: './producto-consulta.component.html',
  styleUrls: ['./producto-consulta.component.css']
})
export class ProductoConsultaComponent implements OnInit {
  
  productos:Producto[];
  constructor(private productoService: ProductoService) { }
  
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.productoService.getAll().subscribe(productos => this.productos = productos);
    console.log(JSON.stringify(this.productos))
  }
}
