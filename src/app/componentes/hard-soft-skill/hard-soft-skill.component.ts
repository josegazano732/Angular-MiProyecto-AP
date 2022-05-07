
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

import { __values } from 'tslib';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hard-soft-skill',
  templateUrl: './hard-soft-skill.component.html',
  styleUrls: ['./hard-soft-skill.component.css']
})
export class HardSoftSkillComponent implements OnInit {

  hardList: Array<any> = [];
  softList:Array<any> = [];
  //xpe:any;

  formSkill:FormGroup;

constructor(private skillServicio:PorfolioService,private formBuilder: FormBuilder,private ruta:Router) {
  this.formSkill = this.formBuilder.group({
    idhard_skill:[''],
    nombre_habilidad:[''],
    valor_hab:[''],
    persona_id:['']
  });
}

  ngOnInit(): void {
    this.skillServicio.obtenerSkillHard().subscribe((data:any)=>{
      this.hardList=data;
    })

    this.skillServicio.obtenerSkillSoft().subscribe((data:any)=>{
      this.softList=data;
    })

  }



  
  


  

}
