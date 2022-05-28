import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  titulo:string = ' Inicia Sesion!';
  usuario: Usuario;


  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/portfolio']);
    }
  }

  login(): void {
    //console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      Swal.fire('Error Login', 'Usuario o contraseña vacías!', 'error');
      return;
    }

    this.authService.loguin(this.usuario).subscribe(response => {
      //console.log(response);

      
     

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;




      this.router.navigate(['/portfolio']);
      Swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
    },err => {
      if (err.status == 400) {
        Swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );

  
}
}
