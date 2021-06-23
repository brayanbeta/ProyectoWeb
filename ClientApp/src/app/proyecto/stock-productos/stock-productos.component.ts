import {Component, OnInit} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';
@Component({
  selector: 'app-stock-productos',
  templateUrl: './stock-productos.component.html',
  styleUrls: ['./stock-productos.component.css']
})
export class StockProductosComponent implements OnInit {

  productos:Producto[];

  constructor(private productoService: ProductoService) {
  }


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productoService.getAll().subscribe(productos => this.productos = productos);
    console.log(JSON.stringify(this.productos))
  }
}
