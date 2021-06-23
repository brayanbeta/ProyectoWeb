import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../models/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/proyecto/alert-modal/alert-modal.component';
@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  producto: Producto;
constructor(private productoService: ProductoService,private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.producto = new Producto();  
    this.registerForm = this.formBuilder.group({
      codigoProducto: [this.producto.codigoProducto, [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      imagenProducto: [this.producto.imagenProducto, Validators.required],
      nombreProducto: [this.producto.nombreProducto, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      costoProducto: [this.producto.costoProducto, Validators.required],
      presentacionProducto: [this.producto.presentacionProducto,  Validators.required],
      estadoProducto:[this.producto.estadoProducto = "DISPONIBLE"],
      categoriaProducto: [this.producto.categoriaProducto, Validators.required],
      cantidadProducto: [this.producto.cantidadProducto, Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

    create() {
      this.producto = this.registerForm.value;
  
      this.productoService.post(this.producto).subscribe(c => {
          if (c != null) {
              const messageBox = this.modalService.open(AlertModalComponent)
              messageBox.componentInstance.title = "Resultado Operación";
              messageBox.componentInstance.message = 'Se agrego correctamente el producto!!';
              this.onReset();
          }
      });
    }
  
    onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
      this.create();
    }
  
    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
}
