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

  constructor(private datosProyecto:PorfolioService,private formBuilder: FormBuilder,private ruta:Router) {
    this.formProyecto = this.formBuilder.group({
      id:[''],
      titulo:['',[Validators.required]],
      fecha:[''],
      nombre:[''],
      descripcion:[''],
      repo:[''],     
      foto:[''],
      //persona_id:['']
      
    })
}

  ngOnInit(): void {
    this.datosProyecto.obtenerProyecto().subscribe((data:any)=>{
      this.proyectoList=data;
      console.log(this.proyectoList);
      
    })
  }

}
