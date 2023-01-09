import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {


  constructor(private http:HttpClient) { }

  login(usuarioId: string, password: string): Observable<any> {
    return this.http.get("http://localhost:8080/loginusuario/"+usuarioId+"/"+password);
  }
}
