import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';



import { Skill } from 'src/app/skill';
import { SKILL } from 'src/app/mock-skill';
import { __values } from 'tslib';



@Component({
  selector: 'app-hard-soft-skill',
  templateUrl: './hard-soft-skill.component.html',
  styleUrls: ['./hard-soft-skill.component.css']
})
export class HardSoftSkillComponent implements OnInit {

  detalle = SKILL;

  x = this.detalle.forEach(e => {
    return e.valor;
  });

  acumularDos(valor1:string, valor2:number){
    this.detalle.forEach(function(x,index): number | undefined{
    //return x.valor + valor1;
    if (x.nombre == valor1) {
      return x.valor += valor2;  
    }
    else {
      return undefined;
    }
  });

  this.detalle.forEach(function(x,index){
    //return x.valor + valor1;
    if (x.valor <= -1 || x.valor >= 101) {
      x.valor = 0;
      alert("VALOR EXCEDIDO, volver a intentarlo");  
    }
  });
  }

  skillListD:any;
  skillListB:any;


  constructor(private skillDato:PorfolioService) {
  
  }

  ngOnInit(): void {
    this.skillDato.obtenerDatos().subscribe(data =>{
      //console.log(data.skillB);
      this.skillListB=data.skillB;
      this.skillListD=data.skillD;
      
      
    })
  }



  
  


  

}
