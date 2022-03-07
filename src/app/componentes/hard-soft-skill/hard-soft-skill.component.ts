import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Skill } from 'src/app/skill';
import { SKILL } from 'src/app/mock-skill';

@Component({
  selector: 'app-hard-soft-skill',
  templateUrl: './hard-soft-skill.component.html',
  styleUrls: ['./hard-soft-skill.component.css']
})
export class HardSoftSkillComponent implements OnInit {

  detalle = SKILL;

  progreso = 80;
  //valor=""
  //javaScript:number = 10;
  porcentajeType:number = 30;



  acumularDos(valorNombre:string,valor:number ){
   // this.porcentajeType += valor;
    //this.detalle[1].valor += valor1 ;
    this.detalle.[0] = valorNombre;

    


  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
