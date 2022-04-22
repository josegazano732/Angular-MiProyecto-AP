import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { ExperienciaI } from '../models/experiencia/experiencia.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experienciaList: ExperienciaI[] = [];

  constructor(private datosExperiencia:PorfolioService) { }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatosExp().subscribe(data => {
      console.log(data[0]);
      this.experienciaList=data;
      
    });
  }

}
