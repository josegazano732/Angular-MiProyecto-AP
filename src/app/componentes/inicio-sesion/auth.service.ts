import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';





@Injectable({
    providedIn: 'root'
  })

  export class AuthService {


    constructor(private http: HttpClient) { }


    loguin(usuario:Usuario):Observable<any>{
      const urlEndpoint = 'https://apiportfolio-ap.herokuapp.com/oauth/token';

      const credenciales = btoa('AngularMiProyectoAP' + ':' + '12345');

      const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + credenciales
      });

      let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    console.log(params.toString());

      return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders })
    }
}

  


