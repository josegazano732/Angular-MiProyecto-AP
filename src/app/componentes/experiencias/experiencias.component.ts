import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { __values } from 'tslib';
import { Experiencia } from './experiencia';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ExperienciaI } from '../models/experiencia/experiencia.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../inicio-sesion/auth.service';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experienciaList: Array<any> = [];
  //xpe:any;

  expe:Experiencia= new Experiencia();

  form:FormGroup;

  constructor(private datosExperiencia:PorfolioService,private formBuilder: FormBuilder,private ruta:Router,public authService: AuthService) { 
    this.form = this.formBuilder.group({
      id:[''],
      nombreempresa:['',[Validators.required]],
      fechainicio:[''],
      fechafin:[''],
      tipo_empleo_id:[''],
      descripcion:[''],     
      url_logo:[''],
      persona_id:['']
      
    })
  }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
      //console.log(data);
      this.experienciaList=data;
    });
    this.datosExperiencia.obtenerDatos().subscribe((data:any)=>{
      this.form.controls['persona_id'].setValue(data[0].id);
    });

  }

  limpiarExp(){
    this.form.controls['id'].setValue("");
      this.form.controls['nombreempresa'].setValue("");
      this.form.controls['fechainicio'].setValue("");
      this.form.controls['fechafin'].setValue("");
      this.form.controls['tipo_empleo_id'].setValue("");
      this.form.controls['descripcion'].setValue("");
      //this.form.controls['persona_id'].setValue(xp.persona_id);
      this.form.controls['url_logo'].setValue("");
  }


  create(){
    //console.log(clicked);
    //console.log(this.form.value);
    this.datosExperiencia.crearExperiencia(this.form.value).subscribe((data:ExperienciaI) => {
      //console.log(data);
      //location.reload()
      this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
        //console.log(data);
        this.experienciaList=data;
      });
    });
    Swal.fire(
      'Creado!',
      ` Nueva experiencia creada con éxito.`,
      'success'
    )
  }

  obtenerExpId(id:any){
    //console.log(id);
    this.datosExperiencia.obtenerExpId(id).subscribe((data:ExperienciaI)=> {
     // console.log(data);
      let xp:any=data;
      //this.xpe=data;
     // console.log(xp);
      this.form.controls['id'].setValue(xp.id);
      this.form.controls['nombreempresa'].setValue(xp.nombreempresa);
      this.form.controls['fechainicio'].setValue(xp.fechainicio);
      this.form.controls['fechafin'].setValue(xp.fechafin);
      this.form.controls['tipo_empleo_id'].setValue(xp.tipo_empleo_id);
      this.form.controls['descripcion'].setValue(xp.descripcion);
      //this.form.controls['persona_id'].setValue(xp.persona_id);
      this.form.controls['url_logo'].setValue(xp.url_logo);
      
    })
  }

  editarExp(id:any){
    //console.log(this.xpe.id);
    console.log(this.form.value);
    
    this.datosExperiencia.editarExperiencia(this.form.value.id,this.form.value).subscribe((data:any) => {
      //console.log(data);
      //this.experienciaList=data;
      this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
        //console.log(data);
        this.experienciaList=data;
      });

      this.form.controls['id'].setValue("");
      this.form.controls['nombreempresa'].setValue("");
      this.form.controls['fechainicio'].setValue("");
      this.form.controls['fechafin'].setValue("");
      this.form.controls['tipo_empleo_id'].setValue("");
      this.form.controls['descripcion'].setValue("");
      //this.form.controls['persona_id'].setValue(data.persona_id);
      this.form.controls['url_logo'].setValue("");
      //location.reload()
    });
    Swal.fire(
      'Editado!',
      ` Experiencia nro: ${id} editado con éxito.`,
      'success'
    )
  }

  eliminarExpId(id:any){
    console.log(id);
    this.datosExperiencia.borrarExpId(id).subscribe((data:any)=>{
      console.log(data);

      this.datosExperiencia.obtenerDatosExp().subscribe((data:any) => {
        //console.log(data);
        this.experienciaList=data;
      });
    })
    Swal.fire(
      'Eliminado!',
      ` Experiencia nro: ${id} eliminado con éxito.`,
      'success'
    )
  }


}


