import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-navbar-auth',
  templateUrl: './navbar-auth.component.html',
  styleUrls: ['./navbar-auth.component.scss']
})
export class NavbarAuthComponent {

  @Input() public openOrClose: boolean = false;

  constructor(private usuarioService: UsuarioService,  private router: Router) { }

   public logout() {
    this.usuarioService.logout();
    this.router.navigate(['/auth']);
  }

}
