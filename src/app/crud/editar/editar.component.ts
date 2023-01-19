import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceService, Paciente } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string="";
  pacienteActual: Paciente={id:'', nombre:'', especie:'', raza:''}
  constructor(private crudserv: CrudserviceService, private antivateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.antivateRouter.snapshot.params['id'];
    this.crudserv.getUnPaciente(this.id).subscribe(
      res=> {this.pacienteActual=res},
      err => console.log(err)
    );
  }

  guardar(){
    this.crudserv.editPaciente(this.id, this.pacienteActual).subscribe(
      res=> {this.router.navigate(['/dashboard'])},
      err => console.log(err)
    );
  }

}
