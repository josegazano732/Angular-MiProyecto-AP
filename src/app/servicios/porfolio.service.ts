import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { EducacionI } from '../componentes/models/educacion/educacion.interface';
import { EDUCACION } from '../componentes/models/educacion/mock-educacion';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

private _listado:any= this.Http.get('/assets/data/data.json');


constructor(private Http:HttpClient) { }

agregarEducacion(educacion:EducacionI){
  this._listado.push(educacion);
}

obtenerDatos():Observable<any> {
  return this.Http.get('/assets/data/data.json');
  }

  
}
