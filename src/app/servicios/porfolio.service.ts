import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciaI } from '../componentes/models/experiencia/experiencia.interface';
import { EducacionI } from '../componentes/models/educacion/educacion.interface';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
url:string="https://apiportfolio-ap.herokuapp.com/api/";
constructor(private Http:HttpClient) { }

                                //Metodos Personas
obtenerDatos():Observable<any> {
  //return this.Http.get('/assets/data/data.json');
  return this.Http.get<any>(`${this.url}personas`);
  }


                               //Metodos Experiencias 
  obtenerExpId(id:any):Observable<ExperienciaI>{

    return this.Http.get<ExperienciaI>(`${this.url}experiencia/${id}`);
  }

  obtenerDatosExp(){
    return this.Http.get<ExperienciaI>(this.url+"experiencia");
  }

  crearExperiencia(exp:ExperienciaI):Observable<ExperienciaI>{
    //const path= this.url+"experiencia/nueva";
    return this.Http.post<ExperienciaI>(this.url+"experiencia/nueva",exp);
  }

  editarExperiencia(id:any,cuerpo:any):Observable<any>{
    return this.Http.put<any>(`${this.url}experiencia/actualizar/${id}`,cuerpo);
  }

  borrarExpId(id:any){
    return this.Http.delete<any>(`${this.url}experiencia/borrar/${id}`);

  }

  //Metodos Educacion
  obtenerDatosEdu():Observable<any>{
    return this.Http.get<EducacionI>(`${this.url}educacion`);
  }

  
}
