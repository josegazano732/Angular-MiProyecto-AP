import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-img-acerca',
  templateUrl: './img-acerca.component.html',
  styleUrls: ['./img-acerca.component.css']
})
export class ImgAcercaComponent implements OnInit {

  acercaList:any;

  constructor(private datosAcerca:PorfolioService) { }

  ngOnInit(): void {
    this.datosAcerca.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.acercaList=data[0];
    })
  }

}
