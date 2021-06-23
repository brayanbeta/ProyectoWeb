import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/proyecto/alert-modal/alert-modal.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-productos-edit',
  templateUrl: './stock-productos-edit.component.html',
  styleUrls: ['./stock-productos-edit.component.css']
})
export class StockProductosEditComponent implements OnInit {
  producto: Producto;
  stask: string;
  constructor(private route: ActivatedRoute,private productoService: ProductoService,private modalService: NgbModal, private formBuilder: FormBuilder,private location: Location) { }
  ngOnInit() {
    this.get();
  }


  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.productoService.get(id)
      .subscribe(hero => this.producto = hero);
  }
  update(): void {
    this.productoService.update(this.producto)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.productoService.delete(this.producto)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back;
  }

}
