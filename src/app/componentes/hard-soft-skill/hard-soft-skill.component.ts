import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-soft-skill',
  templateUrl: './hard-soft-skill.component.html',
  styleUrls: ['./hard-soft-skill.component.css']
})
export class HardSoftSkillComponent implements OnInit {

  progreso = 80;
  valor=""
  java = 10;
  porcentaje = {
    width:'60%'
  }

  acumular(){
    if (this.java >= 100){
      this.java = 10;
      alert("Sobrepaso el maximo permitido");
    }
    this.java += 10;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
