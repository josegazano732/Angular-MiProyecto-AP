import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PorfolioService } from '../../servicios/porfolio.service';
import { EducacionI } from '../models/educacion/educacion.interface';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList: Array<any> = [];
  //xpe:any;

  formEdu:FormGroup;

  constructor(private educacionServi:PorfolioService,private formBuilder: FormBuilder,private ruta:Router) { 
  this.formEdu = this.formBuilder.group({
    id:[''],
    nombre:[''],
    inicio:[''],
    finalizado:[''],    
    url_logo:[''],
    persona_id:['']
    
  })
}

  ngOnInit(): void {
    this.educacionServi.obtenerDatosEdu().subscribe((data:any) => {
      //console.log(data);
      this.educacionList=data;
      //this.formEdu.controls['persona_id'].setValue(data[0].persona_id);
      this.educacionServi.obtenerDatos().subscribe((data:any)=>{
        this.formEdu.controls['persona_id'].setValue(data[0].id);
      })
      //console.log(this.formEdu.value);
    });
  }

  crearEdu(){
    console.log(this.formEdu.value);
    this.educacionServi.crearEducacion(this.formEdu.value).subscribe((data:EducacionI)=>{
      
      this.educacionServi.obtenerDatosEdu().subscribe((data:any) => {
        //console.log(data);
        this.educacionList=data;
      });
    });
  }

  obtenerEduId(id:any){
    console.log(id);
    this.educacionServi.obtenerEduId(id).subscribe((data:EducacionI)=> {
     // console.log(data);
      let xp:any=data;
      //this.xpe=data;
      console.log(xp);
      this.formEdu.controls['id'].setValue(xp.id);
      this.formEdu.controls['nombre'].setValue(xp.nombre);
      this.formEdu.controls['inicio'].setValue(xp.inicio);
      this.formEdu.controls['finalizado'].setValue(xp.finalizado);
      this.formEdu.controls['url_logo'].setValue(xp.url_logo);
      //this.formEdu.controls['persona_id'].setValue(xp);
    })
  }

  editarEdu(id:any){
    //console.log(this.xpe.id);
    console.log(this.formEdu.value);
    
    this.educacionServi.editarEducacion(this.formEdu.value.id,this.formEdu.value).subscribe((data:any) => {
      //console.log(data);
      //this.experienciaList=data;
      this.educacionServi.obtenerDatosEdu().subscribe((data:any) => {
        //console.log(data);
        this.educacionList=data;
      });

      this.formEdu.controls['id'].setValue("");
      this.formEdu.controls['nombre'].setValue("");
      this.formEdu.controls['inicio'].setValue("");
      this.formEdu.controls['finalizado'].setValue("");
      this.formEdu.controls['url_logo'].setValue("");
      //this.formEdu.controls['persona_id'].setValue(data.persona_id);
    });
  }

  eliminarEduId(id:any){
    console.log(id);
    this.educacionServi.borrarEduId(id).subscribe((data:any)=>{
      console.log(data);

      this.educacionServi.obtenerDatosEdu().subscribe((data:any) => {
        //console.log(data);
        this.educacionList=data;
      });
    })
  }





}

