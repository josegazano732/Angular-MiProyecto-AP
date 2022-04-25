import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { EducacionI } from '../componentes/models/educacion/educacion.interface';
import { EDUCACION } from '../componentes/models/educacion/mock-educacion';
import { ExperienciaI } from '../componentes/models/experiencia/experiencia.interface';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
url:string="https://apiportfolio-ap.herokuapp.com/api/";
constructor(private Http:HttpClient) { }

obtenerDatos():Observable<any> {
  //return this.Http.get('/assets/data/data.json');
  return this.Http.get<any>(`${this.url}personas`);
  }

  obtenerDatosExp():Observable<any>{
    return this.Http.get<any>(this.url+"experiencia");
  }

  
}
