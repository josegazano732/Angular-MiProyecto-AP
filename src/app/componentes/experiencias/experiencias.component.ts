import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { __values } from 'tslib';
import { Experiencia } from './experiencia';
import { FormGroup, FormBuilder } from '@angular/forms';


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
      empresa:[''],
      inicioAct:[''],
      finAct:[''],
      tipoEmpleo:[''],
      activRealizada:[''],
      logo:['']
      
    })
  }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
      console.log(data);
      this.experienciaList=data;
    });

  }

  create(values: any){
    //console.log(clicked);
    console.log(values);
    
    
  }

}
