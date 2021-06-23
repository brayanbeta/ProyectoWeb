import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'
import { Usuario } from 'src/app/proyecto/models/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  usuario: Usuario;
  stask: string;
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) { }
  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.usuarioService.get(id)
      .subscribe(hero => this.usuario = hero);
  }
}
