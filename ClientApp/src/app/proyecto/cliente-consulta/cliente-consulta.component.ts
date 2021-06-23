import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { forEachChild } from 'typescript';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {

  
  usuarios:Usuario[];
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.usuarioService.getAll().subscribe(usuarios => this.usuarios = usuarios);
    console.log(JSON.stringify(this.usuarios))
  }
}
