import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ExperienciaI } from '../componentes/models/experiencia/experiencia.interface';
import { EducacionI } from '../componentes/models/educacion/educacion.interface';
import { SkillI } from '../componentes/models/Skill/skill.interface';
import { ProyectoI } from '../componentes/models/proyecto/proyecto.interface';
import { PersonaI } from '../componentes/models/persona/persona.interface';



@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
url:string="https://apiportfolio-ap.herokuapp.com/api/";
private _refresh$ = new Subject<void>();

constructor(private Http:HttpClient) { }

//---------------------------------Persona----------------------------------------
get refresh$(){
  return this._refresh$;
}

obtenerPersonaId(id:any):Observable<PersonaI>{
  return this.Http.get<PersonaI>(`${this.url}personas/${id}`);//falta ver todavia
}

obtenerDatos():Observable<any> {
  return this.Http.get<any>(`${this.url}personas`);
  }

  editarPersona(id:any,cuerpo:any):Observable<PersonaI>{
    return this.Http.put<PersonaI>(`${this.url}personas/actualizar/${id}`,cuerpo)
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
    )
  }



  




//-----------------------------Experiencia--------------------------------------------
  obtenerExpId(id:any):Observable<ExperienciaI>{
    return this.Http.get<ExperienciaI>(`${this.url}experiencia/${id}`);
  }

  obtenerDatosExp(){
    return this.Http.get<ExperienciaI>(this.url+"experiencia");
  }

  crearExperiencia(exp:ExperienciaI):Observable<ExperienciaI>{
    return this.Http.post<ExperienciaI>(this.url+"experiencia/nueva",exp);
  }

  editarExperiencia(id:any,cuerpo:any):Observable<any>{
    return this.Http.put<any>(`${this.url}experiencia/actualizar/${id}`,cuerpo);
  }

  borrarExpId(id:any){
    return this.Http.delete<any>(`${this.url}experiencia/borrar/${id}`);

  }

  //-----------------------------Educacion--------------------------------------------

  obtenerEduId(id:any):Observable<EducacionI>{
    return this.Http.get<EducacionI>(`${this.url}educacion/${id}`);//falta ver todavia
  }


  obtenerDatosEdu():Observable<any>{
    return this.Http.get<EducacionI>(`${this.url}educacion`);
  }

  crearEducacion(edu:EducacionI):Observable<EducacionI>{
    //const path= this.url+"experiencia/nueva";
    return this.Http.post<EducacionI>(this.url+"educacion/nueva",edu);
  }

  editarEducacion(id:any,cuerpo:any):Observable<EducacionI>{
    return this.Http.put<EducacionI>(`${this.url}educacion/actualizar/${id}`,cuerpo);
  }

  borrarEduId(id:any){
    return this.Http.delete<any>(`${this.url}educacion/borrar/${id}`);
  } 
  //Final de Metodos Educacion


  //Metodos para los Skill
  //-----------------------------Hard-Skill--------------------------------------------
  obtenerHardId(id:any):Observable<SkillI>{
    return this.Http.get<SkillI>(`${this.url}hardskill/${id}`);//falta ver todavia
  }


  obtenerSkillHard(){
    return this.Http.get<SkillI>(this.url+"hardskill");
  }

  crearHardSkill(hard:SkillI):Observable<SkillI>{
    return this.Http.post<SkillI>(this.url+"hardskill/nueva",hard);
  }

  editarHardSkill(id:any,cuerpo:any):Observable<SkillI>{
    return this.Http.put<SkillI>(`${this.url}hardskill/actualizar/${id}`,cuerpo);
  }

  borrarHardId(id:any){
    return this.Http.delete<any>(`${this.url}hardskill/borrar/${id}`);
  } 

  //----------------------------Soft-Skill---------------------------------------------
  obtenerSoftId(id:any):Observable<SkillI>{
    return this.Http.get<SkillI>(`${this.url}softskill/${id}`);//falta ver todavia
  }

  obtenerSkillSoft(){
    return this.Http.get<SkillI>(this.url+"softskill");
  }

  crearSoftSkill(soft:SkillI):Observable<SkillI>{
    return this.Http.post<SkillI>(this.url+"softskill/nueva",soft);
  }

  editarSoftSkill(id:any,cuerpo:any):Observable<SkillI>{
    return this.Http.put<SkillI>(`${this.url}softskill/actualizar/${id}`,cuerpo);
  }

  borrarSoftId(id:any){
    return this.Http.delete<any>(`${this.url}softskill/borrar/${id}`);
  } 


  //----------------------------Proyectos--------------------------------------------
  obtenerProyectoId(id:any):Observable<ProyectoI>{
    return this.Http.get<ProyectoI>(`${this.url}proyecto/${id}`);//falta ver todavia
  }

  obtenerProyecto(){
    return this.Http.get<ProyectoI>(this.url+"proyecto");
  }

  crearProyecto(pro:ProyectoI):Observable<ProyectoI>{
    return this.Http.post<ProyectoI>(this.url+"proyecto/nueva",pro);
  }
  
  editarProyecto(id:any,cuerpo:any):Observable<ProyectoI>{
    return this.Http.put<ProyectoI>(`${this.url}proyecto/actualizar/${id}`,cuerpo);
  }

  borrarProyeto(id:any){
    return this.Http.delete<any>(`${this.url}proyecto/borrar/${id}`);
  } 
  
}
