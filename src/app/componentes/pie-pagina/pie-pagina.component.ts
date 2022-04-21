import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  pieList:any;

  constructor(private pieDato:PorfolioService) { }

  ngOnInit(): void {
    this.pieDato.obtenerDatos().subscribe(data =>{
      console.log(data[0]);
      this.pieList=data[0];
    })
  }

}
