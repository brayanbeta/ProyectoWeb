import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/proyecto/models/usuario'
import { Observable } from 'rxjs';
import { HandleErrorService } from 'src/app/services/handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Rol } from 'src/app/proyecto/models/rol'
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;
  constructor(private _router: Router,private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleErrorService) { 
      this.baseUrl = baseUrl;
    }

  usuario : Usuario;

  login(user: string,nombre: string,apellido: string, password: string, rol:string) {
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('apellido', apellido);
    sessionStorage.setItem('roles', rol);
  }

  cotizacion(cotizacion: string, noMas: string){
    sessionStorage.setItem('cotizacion', cotizacion);
    sessionStorage.setItem('noMas', noMas);
  }

  productoG(productoG: string){
    sessionStorage.setItem('productoG', productoG);
  }
  logout() {
    sessionStorage.clear();
    //this._router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user')!=null;
  }

  hasRole(rol: string): boolean {
    let roles: string[]
    if (!this.isAuthenticated()) return false;
    if(sessionStorage.getItem('roles')=="ADMINISTRADOR"){
      roles =["ADMINISTRADOR"];
      return roles.indexOf(rol) >= 0;
    }else{
      if(sessionStorage.getItem('roles')=="CLIENTE"){
        roles = ["CLIENTE"];
        return roles.indexOf(rol) >= 0;
      }
    }
  }

  
  getUserName(): string {
    return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
  }

  getName(): string {
    return sessionStorage.getItem('nombre') != null ? sessionStorage.getItem('nombre'):'Anonimo';
  }

  getApellido(): string {
    return sessionStorage.getItem('apellido') != null ? sessionStorage.getItem('apellido'):'Anonimo';
  }

  getRolUser(): string {
    return sessionStorage.getItem('roles') != null ? sessionStorage.getItem('roles'):'Anonimo';
  }

  getCotizacion(): string {
    return sessionStorage.getItem('cotizacion') != null ? sessionStorage.getItem('cotizacion'):'';
  }

  getNoMas(): string {
    return sessionStorage.getItem('noMas') != null ? sessionStorage.getItem('noMas'):'';
  }

  
  getProductoG(): string {
    return sessionStorage.getItem('productoG') != null ? sessionStorage.getItem('productoG'):'';
  }
}
