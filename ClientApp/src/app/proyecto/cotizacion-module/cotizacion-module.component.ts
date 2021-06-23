import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cotizacion-module',
  templateUrl: './cotizacion-module.component.html',
  styleUrls: ['./cotizacion-module.component.css']
})
export class CotizacionModuleComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
