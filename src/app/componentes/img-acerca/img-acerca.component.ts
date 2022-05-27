import { ChangeDetectionStrategy, Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PorfolioService } from '../../servicios/porfolio.service';
import { PersonaI } from '../models/persona/persona.interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-img-acerca',
  templateUrl: './img-acerca.component.html',
  styleUrls: ['./img-acerca.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgAcercaComponent implements OnInit {

  acercaList:any;
  
  formPersona:FormGroup;

  constructor(private datosAcerca:PorfolioService,private formBuilder: FormBuilder,private router: Router) { 
    this.formPersona = this.formBuilder.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      domicilio:[''],//vamos a cambiar por ubicacion
      fechaNac:[''],//vamos a cambiar por frase
      contacto:[''],
      correo:[''],
      sobre_mi:[''],
      url_foto:['']
    });
  }

  ngOnInit(): void {
    this.datosAcerca.obtenerDatos().subscribe((data:any) =>{
      console.log(data);
      this.acercaList=data[0];
      console.log(this.acercaList);
      
    });
     
  }

  personaId(id:any){
    //console.log(id);
    this.datosAcerca.obtenerPersonaId(id).subscribe((data:PersonaI)=> {
      let xp:any=data;
      //console.log(xp);
      
      this.formPersona.controls['id'].setValue(xp.id);
      this.formPersona.controls['nombre'].setValue(xp.nombre);
      this.formPersona.controls['apellido'].setValue(xp.apellido);
      this.formPersona.controls['domicilio'].setValue(xp.domicilio);
      this.formPersona.controls['fechaNac'].setValue(xp.fechaNac);
      this.formPersona.controls['contacto'].setValue(xp.contacto);
      this.formPersona.controls['correo'].setValue(xp.correo);
      this.formPersona.controls['sobre_mi'].setValue(xp.sobre_mi);
      this.formPersona.controls['url_foto'].setValue(xp.url_foto);

      //this.formSkill.controls['persona_id'].setValue(xp);
    })
  }

  editarPersona(id:any){
    this.datosAcerca.editarPersona(this.formPersona.value.id,this.formPersona.value).subscribe((data:any) => {
      this.datosAcerca.obtenerDatos().subscribe((data:any) => {
        this.acercaList=data[0].EventEmitter;
      });
      
    });
    
  }

}
