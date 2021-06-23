import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  constructor(private authorizeService: AuthService,
    private _router: Router
    ) { }

  userName(): string {
      return this.authorizeService.getUserName();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }


}
