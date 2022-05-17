import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css'],
  
})
export class PiePaginaComponent implements OnInit {

  pieList:any;
 
  suscription!: Subscription;
  constructor(private pieDato:PorfolioService) { }

  ngOnInit(): void { 
    this.obtenerPersona();
    this.suscription = this.pieDato.refresh$.subscribe(()=>{
      this.obtenerPersona()
      });
  }
   
  obtenerPersona(){
    this.pieDato.obtenerDatos().subscribe((data: any) =>{
      //console.log(data[0]);
      this.pieList=data[0];
      
      console.log(this.pieList);
    }); 
  }

}
