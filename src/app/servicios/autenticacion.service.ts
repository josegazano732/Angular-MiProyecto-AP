import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "";// queda pendiente termina API loguin y auth
  currentUserSubjet:BehaviorSubject<any>
  constructor(private http:HttpClient) {
    console.log("El Servicio de autenticacion esta corriendo");
    this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }

    iniciarSesion (credenciales:any):Observable<any>{
      return this.http.post(this.url, credenciales).pipe(map(data=> {

        return data;
      }))
    }

}
