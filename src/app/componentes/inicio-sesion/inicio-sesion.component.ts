import { Component, OnInit } from '@angular/core';


import { Router, Routes } from '@angular/router';
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
    
    }




}
