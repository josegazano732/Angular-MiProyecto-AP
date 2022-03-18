import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  eduList:any;

  constructor(private datoEducacion:PorfolioService) { }

  ngOnInit(): void {
    this.datoEducacion.obtenerDatos().subscribe(data =>{
      //console.log(data.educacion);
      this.eduList=data.educacion;

      
    })
  }

}
