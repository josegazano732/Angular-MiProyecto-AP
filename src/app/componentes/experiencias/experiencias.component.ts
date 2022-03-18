import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experienciaList:any;

  constructor(private datosExperiencia:PorfolioService) { }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data => {
      //console.log(data);
      this.experienciaList=data.experiencia;
      
    });
  }

}
