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
@Component({
  selector: 'app-cotizacion-registro',
  templateUrl: './cotizacion-registro.component.html',
  styleUrls: ['./cotizacion-registro.component.css']
})
export class CotizacionRegistroComponent implements OnInit {


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
      this.getAll();
    }
    getAll() {
      this.cotizacionService.getAll().subscribe(cotizaciones => this.cotizaciones = cotizaciones);
    }
}
