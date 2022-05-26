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
    
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      Swal.fire('Error Login', 'Usuario o contraseña vacías!', 'error');
      return;
    }

    this.authService.loguin(this.usuario).subscribe(response => {
      console.log(response);
      let payload = JSON.parse(atob(response.access_token.split(".")[1]))
      console.log(payload);
      this.router.navigate(['/portfolio']);
      Swal.fire('Login', `Hola ${payload.user_name}, has iniciado sesión con éxito!`, 'success');

      
    
    });

  
}
}
