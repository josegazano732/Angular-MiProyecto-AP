import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';





@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
    private _usuario: Usuario | undefined;
    private _token: string | undefined;

    constructor(private http: HttpClient) { }

    


  }