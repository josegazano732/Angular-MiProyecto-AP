
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

import { __values } from 'tslib';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillI } from '../models/Skill/skill.interface';
import Swal from 'sweetalert2';
import { AuthService } from '../inicio-sesion/auth.service';



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

constructor(private skillServicio:PorfolioService,private formBuilder: FormBuilder,private ruta:Router,public authService: AuthService) {
  this.formSkill = this.formBuilder.group({
    idsoft_skill:[''],
    idhard_skill:[''],
    nombre_habilidad:[''],
    valor_hab:[''],
    persona_id:['']
  });
}

  ngOnInit(): void {
    this.skillServicio.obtenerSkillHard().subscribe((data:any)=>{
      this.hardList=data;
    });
    this.skillServicio.obtenerDatos().subscribe((data:any)=>{
      this.formSkill.controls['persona_id'].setValue(data[0].id);
    });
    //----------------------------------------------------------------------------------------

    this.skillServicio.obtenerSkillSoft().subscribe((data:any)=>{
      this.softList=data;
    });

  }

  limpiarForm(){
    this.formSkill.controls['idsoft_skill'].setValue("");
    this.formSkill.controls['idhard_skill'].setValue("");
    this.formSkill.controls['nombre_habilidad'].setValue("");
    this.formSkill.controls['valor_hab'].setValue("");
  }

  crearHard(){
    //console.log(this.formSkill.value);
    this.skillServicio.crearHardSkill(this.formSkill.value).subscribe((data:SkillI)=>{
      this.skillServicio.obtenerSkillHard().subscribe((data:any) => {
        //console.log(data);
        this.hardList=data;
      });
    });
    Swal.fire(
      'Creado!',
      ` Nuevo Hard-Skill creado con éxito.`,
      'success'
    )
  }

  hardId(id:any){
    //console.log(id);
    this.skillServicio.obtenerHardId(id).subscribe((data:SkillI)=> {
      let xp:any=data;
      this.formSkill.controls['idhard_skill'].setValue(xp.idhard_skill);
      this.formSkill.controls['nombre_habilidad'].setValue(xp.nombre_habilidad);
      this.formSkill.controls['valor_hab'].setValue(xp.valor_hab);
      //this.formSkill.controls['persona_id'].setValue(xp);
    })
  }

  editarHard(id:any){
    this.skillServicio.editarHardSkill(this.formSkill.value.id,this.formSkill.value).subscribe((data:any) => {
      this.skillServicio.obtenerSkillHard().subscribe((data:any) => {
        this.hardList=data;
      });
      //this.formSkill.controls['persona_id'].setValue(data.persona_id);
    });
    Swal.fire(
      'Editado!',
      ` Skill nro: ${id} editado con éxito.`,
      'success'
    )
  }

  eliminarHardId(id:any){
    //console.log(id);
    this.skillServicio.borrarHardId(id).subscribe((data:any)=>{
      console.log(data);

      this.skillServicio.obtenerSkillHard().subscribe((data:any) => {
        this.hardList=data;
      });
    })
    Swal.fire(
      'Eliminado!',
      ` Skill nro: ${id} eliminado con éxito.`,
      'success'
    )
}

//-----------------------------------Metodos para Soft-Skill------------------------
crearSoft(){
  //console.log(this.formSkill.value);
  this.skillServicio.crearSoftSkill(this.formSkill.value).subscribe((data:SkillI)=>{
    this.skillServicio.obtenerSkillSoft().subscribe((data:any) => {
      console.log(data);
      this.softList=data;
    });
  });
  Swal.fire(
    'Creado!',
    ` Nuevo Soft-Skill creado con éxito.`,
    'success'
  )
}

softdId(id:any){
  //console.log(id);
  this.skillServicio.obtenerSoftId(id).subscribe((data:SkillI)=> {
    let xp:any=data;
    this.formSkill.controls['idsoft_skill'].setValue(xp.idsoft_skill);
    this.formSkill.controls['nombre_habilidad'].setValue(xp.nombre_habilidad);
    this.formSkill.controls['valor_hab'].setValue(xp.valor_hab);
    //this.formSkill.controls['persona_id'].setValue(xp);
    console.log(this.formSkill.value);
    
  })
}

editarSoft(id:any){
  //console.log(id);
  this.skillServicio.editarSoftSkill(this.formSkill.value.idsoft_skill,this.formSkill.value).subscribe((data:any) => {
    this.skillServicio.obtenerSkillSoft().subscribe((data:any) => {
      console.log(data);
      this.softList=data;
    });
    //this.formSkill.controls['persona_id'].setValue(data.persona_id);
  });
  Swal.fire(
    'Editado!',
    ` Skill nro: ${id} editado con éxito.`,
    'success'
  )
}

eliminarSoftdId(id:any){
  //console.log(this.softList);
  this.skillServicio.borrarSoftId(id).subscribe((data:any)=>{
   //console.log(data);
    this.skillServicio.obtenerSkillSoft().subscribe((data:any) => {
      this.softList=data;
    });
  })
  Swal.fire(
    'Eliminado!',
    ` Skill nro: ${id} eliminado con éxito.`,
    'success'
  )
 }
}
