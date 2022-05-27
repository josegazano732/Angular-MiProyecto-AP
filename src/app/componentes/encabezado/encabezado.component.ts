import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { PorfolioService } from '../../servicios/porfolio.service';
import { AuthService } from '../inicio-sesion/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit,OnDestroy {

  encabezadoList:any;
  suscription!: Subscription;

  constructor( private encabezadoDato:PorfolioService,public authService: AuthService,private router: Router) { }

  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire('Logout', `Hola ${username}, has cerrado sesión con éxito!`, 'success');
    this.router.navigate(['/loguin']);
  }

  ngOnInit(): void {
    this.obtenerPersona();
    this.suscription = this.encabezadoDato.refresh$.subscribe(()=>{
      this.obtenerPersona()
      });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    console.log('Observable cerrado');
    
  }

  obtenerPersona(){
    this.encabezadoDato.obtenerDatos().subscribe((data: any) =>{
      //console.log(data[0]);
      this.encabezadoList=data[0];
      
      //console.log(this.encabezadoList);
    }); 
  }

}
