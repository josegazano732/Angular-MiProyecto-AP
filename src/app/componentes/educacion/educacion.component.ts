import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PorfolioService } from '../../servicios/porfolio.service';



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
      this.formEdu.controls['persona_id'].setValue(data[0].persona_id);
      console.log(this.formEdu.value);
    });
  }

  crearEdu(){
    console.log(this.formEdu.value);
    
  }


}

