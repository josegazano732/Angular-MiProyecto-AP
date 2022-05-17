import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit,OnDestroy {

  encabezadoList:any;
  suscription!: Subscription;

  constructor( private encabezadoDato:PorfolioService) { }

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
      
      console.log(this.encabezadoList);
    }); 
  }

}
