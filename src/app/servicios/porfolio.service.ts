import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  

  constructor(private Http:HttpClient) { }

  listado:any= this.Http.get('/assets/data/data.json');

  obtenerDatos():Observable<any> {
    return this.Http.get('/assets/data/data.json');
  }
}
