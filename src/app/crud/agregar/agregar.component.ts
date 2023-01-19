import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceService, Paciente } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  pacienteNuevo: Paciente={id:'', nombre:'', especie:'', raza:''}

  constructor(private crudserv: CrudserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarPaciente(){
    this.crudserv.savePaciente(this.pacienteNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/dashboard'])
      },
      err=>console.log(err)

    );
  }

  back(){
        this.router.navigate(['/dashboard'])
  }



}
