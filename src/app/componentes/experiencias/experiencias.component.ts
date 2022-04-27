import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { __values } from 'tslib';
import { Experiencia } from './experiencia';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExperienciaI } from '../models/experiencia/experiencia.interface';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experienciaList: Array<any> = [];

  expe:Experiencia= new Experiencia();

  form:FormGroup;

 

  constructor(private datosExperiencia:PorfolioService,private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      nombreempresa:[''],
      fechainicio:[''],
      fechafin:[''],
      tipo_empleo_id:[''],
      descripcion:[''],     
      lurl_logo:[''],
      persona_id:['']
      
    })
  }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
      console.log(data);
      this.experienciaList=data;
    });

  }

  create(){
    //console.log(clicked);
    //console.log(this.form.value);
    this.datosExperiencia.crearExperiencia(this.form.value).subscribe((data:ExperienciaI) => {
      console.log(data);
      
    });
    
    
  }

}
