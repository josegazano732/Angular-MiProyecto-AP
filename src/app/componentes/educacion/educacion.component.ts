import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { EducacionI } from '../models/educacion/educacion.interface';
import { EDUCACION } from '../models/educacion/mock-educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  nuevo:EducacionI={
    institucion: '',
    anioInicio: 0,
    anioFin: 0,
    logoInst: undefined
  }

  eduList: any;
  

  constructor(private datoEducacion:PorfolioService) { }
  
  ngOnInit(): void {
    this.datoEducacion.obtenerDatos().subscribe(data =>{
      //console.log(data.educacion);
      this.eduList=data.educacion;
      console.log(this.eduList);
    })
  }

}

