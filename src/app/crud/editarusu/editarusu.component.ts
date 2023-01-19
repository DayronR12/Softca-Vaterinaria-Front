import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceUsuarioService, Usuario } from 'src/app/services/crudservice-usuario.service';

@Component({
  selector: 'app-editarusu',
  templateUrl: './editarusu.component.html',
  styleUrls: ['./editarusu.component.css']
})
export class EditarusuComponent implements OnInit {
  id:string="";
  usuarioActual: Usuario={id:'', nombre:'', tipo_identi:'', identificacion:'', ciudad:'', direccion:'', telefono:''}
  constructor(private crudservusu: CrudserviceUsuarioService, private antivateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.antivateRouter.snapshot.params['id'];
    this.crudservusu.getUnUsuario(this.id).subscribe(
      res=> {this.usuarioActual=res},
      err => console.log(err)
    );
  }

  guardarusu(){
    this.crudservusu.editUsuario(this.id, this.usuarioActual).subscribe(
      res=> {this.router.navigate(['/dashboard'])},
      err => console.log(err)
    );
  }

}
