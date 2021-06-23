import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/proyecto/models/usuario';
import { Location } from '@angular/common';
import { CotizacionService } from 'src/app/services/cotizacion.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cotizacion } from 'src/app/proyecto/models/cotizacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MisCotizacionesModalComponent } from 'src/app/carrito/mis-cotizaciones-modal/mis-cotizaciones-modal.component';

@Component({
  selector: 'app-mis-cotizaciones',
  templateUrl: './mis-cotizaciones.component.html',
  styleUrls: ['./mis-cotizaciones.component.css']
})
export class MisCotizacionesComponent implements OnInit {
  usuario: Usuario;
  searchText: string;
  stask: string;
  cotizaciones : Cotizacion[];
  constructor(private location: Location,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
    private cotizacionService: CotizacionService,
    private formBuilder: FormBuilder,
    private authorizeService: AuthService) { }

  ngOnInit() {
    this.searchText = this.userName();
    this.getAll();
  }
  userName(): string {
    return this.authorizeService.getUserName();
  }
  getAll() {
    this.cotizacionService.getAll().subscribe(cotizaciones => this.cotizaciones = cotizaciones);
  }

}
