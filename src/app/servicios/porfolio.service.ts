import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { ExperienciaI } from '../componentes/models/experiencia/experiencia.interface';
import { EducacionI } from '../componentes/models/educacion/educacion.interface';
import { SkillI } from '../componentes/models/Skill/skill.interface';
import { ProyectoI } from '../componentes/models/proyecto/proyecto.interface';
import { PersonaI } from '../componentes/models/persona/persona.interface';
import { Router } from '@angular/router';
import { AuthService } from '../componentes/inicio-sesion/auth.service';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
url:string="https://apiportfolio-ap.herokuapp.com/api/";
private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

private _refresh$ = new Subject<void>();

constructor(private Http:HttpClient, private router:Router,private authService: AuthService) { }

private agregarAuthorizationHeader() {
  let token = this.authService.token;
  if (token != null) {
    return this.httpHeaders.append('Authorization', 'Bearer ' + token);
  }
  return this.httpHeaders;
}

private isNoAutorizado(e:any): boolean{
  if(e.status==401){
    this.router.navigate(['/loguin'])
    return true;
  }
  if( e.status==403){
    Swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso!`, 'warning');
    this.router.navigate(['/portfolio']);
    return true;
  }
  return false;
}

//---------------------------------Persona----------------------------------------
get refresh$(){
  return this._refresh$;
}

obtenerPersonaId(id:any):Observable<PersonaI>{
  return this.Http.get<PersonaI>(`${this.url}personas/${id}`,{ headers: this.agregarAuthorizationHeader() });//falta ver todavia
}

obtenerDatos():Observable<any> {
  return this.Http.get<any>(`${this.url}personas`);
  }

  editarPersona(id:any,cuerpo:any):Observable<PersonaI>{
    return this.Http.put<PersonaI>(`${this.url}personas/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() })
    .pipe(
      tap(()=>{
        this._refresh$.next();
      })
      
    ).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;
    
  }



  




//-----------------------------Experiencia--------------------------------------------
  obtenerExpId(id:any):Observable<ExperienciaI>{
    return this.Http.get<ExperienciaI>(`${this.url}experiencia/${id}`,{ headers: this.agregarAuthorizationHeader() });
  }

  obtenerDatosExp(){
    return this.Http.get<ExperienciaI>(this.url+"experiencia");
  }

  crearExperiencia(exp:ExperienciaI):Observable<ExperienciaI>{
    return this.Http.post<ExperienciaI>(this.url+"experiencia/nueva",exp,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  editarExperiencia(id:any,cuerpo:any):Observable<any>{
    return this.Http.put<any>(`${this.url}experiencia/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  borrarExpId(id:any){
    return this.Http.delete<any>(`${this.url}experiencia/borrar/${id}`,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;

  }

  //-----------------------------Educacion--------------------------------------------

  obtenerEduId(id:any):Observable<EducacionI>{
    return this.Http.get<EducacionI>(`${this.url}educacion/${id}`,{ headers: this.agregarAuthorizationHeader() });//falta ver todavia
  }


  obtenerDatosEdu():Observable<any>{
    return this.Http.get<EducacionI>(`${this.url}educacion`);
  }

  crearEducacion(edu:EducacionI):Observable<EducacionI>{
    //const path= this.url+"experiencia/nueva";
    return this.Http.post<EducacionI>(this.url+"educacion/nueva",edu,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  editarEducacion(id:any,cuerpo:any):Observable<EducacionI>{
    return this.Http.put<EducacionI>(`${this.url}educacion/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  borrarEduId(id:any){
    return this.Http.delete<any>(`${this.url}educacion/borrar/${id}`,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  } 
  //Final de Metodos Educacion


  //Metodos para los Skill
  //-----------------------------Hard-Skill--------------------------------------------
  obtenerHardId(id:any):Observable<SkillI>{
    return this.Http.get<SkillI>(`${this.url}hardskill/${id}`,{ headers: this.agregarAuthorizationHeader() });//falta ver todavia
  }


  obtenerSkillHard(){
    return this.Http.get<SkillI>(this.url+"hardskill");
  }

  crearHardSkill(hard:SkillI):Observable<SkillI>{
    return this.Http.post<SkillI>(this.url+"hardskill/nueva",hard,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  editarHardSkill(id:any,cuerpo:any):Observable<SkillI>{
    return this.Http.put<SkillI>(`${this.url}hardskill/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;
  }

  borrarHardId(id:any){
    return this.Http.delete<any>(`${this.url}hardskill/borrar/${id}`,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  } 

  //----------------------------Soft-Skill---------------------------------------------
  obtenerSoftId(id:any):Observable<SkillI>{
    return this.Http.get<SkillI>(`${this.url}softskill/${id}`,{ headers: this.agregarAuthorizationHeader() });//falta ver todavia
  }

  obtenerSkillSoft(){
    return this.Http.get<SkillI>(this.url+"softskill");
  }

  crearSoftSkill(soft:SkillI):Observable<SkillI>{
    return this.Http.post<SkillI>(this.url+"softskill/nueva",soft,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  editarSoftSkill(id:any,cuerpo:any):Observable<SkillI>{
    return this.Http.put<SkillI>(`${this.url}softskill/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  borrarSoftId(id:any){
    return this.Http.delete<any>(`${this.url}softskill/borrar/${id}`,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;
  } 


  //----------------------------Proyectos--------------------------------------------
  obtenerProyectoId(id:any):Observable<ProyectoI>{
    return this.Http.get<ProyectoI>(`${this.url}proyecto/${id}`,{ headers: this.agregarAuthorizationHeader() });//falta ver todavia
  }

  obtenerProyecto(){
    return this.Http.get<ProyectoI>(this.url+"proyecto");
  }

  crearProyecto(pro:ProyectoI):Observable<ProyectoI>{
    return this.Http.post<ProyectoI>(this.url+"proyecto/nueva",pro,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }
  
  editarProyecto(id:any,cuerpo:any):Observable<ProyectoI>{
    return this.Http.put<ProyectoI>(`${this.url}proyecto/actualizar/${id}`,cuerpo,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  }

  borrarProyeto(id:any){
    return this.Http.delete<any>(`${this.url}proyecto/borrar/${id}`,{ headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );;;
  } 
  
}
