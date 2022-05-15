import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectoI } from '../models/proyecto/proyecto.interface';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectoList: Array<any> = [];

  formProyecto:FormGroup;

  constructor(private datosProyecto:PorfolioService,private formBuilder: FormBuilder) {
    this.formProyecto = this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      fecha:[''],
      nombre:[''],
      descripcion:[''],
      url:[''],     
      foto:[''],
      persona_id:['']
      
    })
}

  ngOnInit(): void {
    this.datosProyecto.obtenerProyecto().subscribe((data:any)=>{
      this.proyectoList=data;
      //console.log(this.proyectoList);
    });
    this.datosProyecto.obtenerDatos().subscribe((data:any)=>{
      this.formProyecto.controls['persona_id'].setValue(data[0].id);
    });
  }

  limpiarFormP(){
    this.formProyecto.controls['id'].setValue("");
    this.formProyecto.controls['titulo'].setValue("");
    this.formProyecto.controls['fecha'].setValue("");
    this.formProyecto.controls['nombre'].setValue("");
    this.formProyecto.controls['descripcion'].setValue("");
    this.formProyecto.controls['url'].setValue("");
    this.formProyecto.controls['foto'].setValue("");
  }

  crearProyecto(){
    console.log(this.formProyecto.value);
    this.datosProyecto.crearProyecto(this.formProyecto.value).subscribe((data:ProyectoI)=>{
      console.log(data);
      this.datosProyecto.obtenerProyecto().subscribe((data:any) => {
        this.proyectoList=data;
      });
    });
  }

  proyectoId(id:any){
    //console.log(id);
    this.datosProyecto.obtenerProyectoId(id).subscribe((data:ProyectoI)=> {
      let xp:any=data;
      //console.log(xp);
      
      this.formProyecto.controls['id'].setValue(xp.id);
      this.formProyecto.controls['titulo'].setValue(xp.titulo);
      this.formProyecto.controls['fecha'].setValue(xp.fecha);
      this.formProyecto.controls['nombre'].setValue(xp.nombre);
      this.formProyecto.controls['descripcion'].setValue(xp.descripcion);
      this.formProyecto.controls['url'].setValue(xp.url);
      this.formProyecto.controls['foto'].setValue(xp.foto);
      //this.formSkill.controls['persona_id'].setValue(xp);
    })
  }

  modificarProyecto(id:any){
    this.datosProyecto.editarProyecto(this.formProyecto.value.id,this.formProyecto.value).subscribe((data:any) => {
      this.datosProyecto.obtenerProyecto().subscribe((data:any) => {
        this.proyectoList=data;
      });
    });
  }

  eliminarProyecto(id:any){
    console.log(id);
    this.datosProyecto.borrarProyeto(id).subscribe((data:any)=>{
      //console.log(data);
      this.datosProyecto.obtenerProyecto().subscribe((data:any) => {
        this.proyectoList=data;
      });
    })
}


}
