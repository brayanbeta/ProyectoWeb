import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-register-module',
  templateUrl: './register-module.component.html',
  styleUrls: ['./register-module.component.css']
})
export class RegisterModuleComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
