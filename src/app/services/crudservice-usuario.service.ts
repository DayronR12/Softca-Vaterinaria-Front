import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceUsuarioService {

  url="http://localhost:8080/usuario/usu";
  constructor(private http: HttpClient) { }

  getUsuario():Observable<any>{
    return this.http.get(this.url)
  }

  getUnUsuario(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id)
  }

  saveUsuario(usuario: Usuario):Observable<any>{
    return this.http.post(this.url, usuario)
  }

  editUsuario(id: string, usuari: Usuario):Observable<any>{
    return this.http.put(this.url+'/'+id, usuari)
  }

  deleteUsuario(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Usuario{
  id:string,
  nombre:string,
  tipo_identi:string,
  identificacion:string,
  ciudad:string,
  direccion:string,
  telefono:string
}


