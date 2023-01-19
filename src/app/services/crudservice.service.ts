import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  url='http://localhost:8080/pacientes/pac';
  constructor(private http: HttpClient) { }

  getPaciente():Observable<any>{
    return this.http.get(this.url)
  }

  getUnPaciente(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id)
  }

  savePaciente(paciente: Paciente):Observable<any>{
    return this.http.post(this.url, paciente)
  }

  editPaciente(id: string, paciente: Paciente):Observable<any>{
    return this.http.put(this.url+'/'+id, paciente)
  }

  deletePaciente(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Paciente{
  id:string,
  especie:string,
  nombre:string,
  raza:string
}
