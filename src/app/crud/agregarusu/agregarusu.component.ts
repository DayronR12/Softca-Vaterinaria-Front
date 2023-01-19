import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceUsuarioService, Usuario } from 'src/app/services/crudservice-usuario.service';

@Component({
  selector: 'app-agregarusu',
  templateUrl: './agregarusu.component.html',
  styleUrls: ['./agregarusu.component.css']
})
export class AgregarusuComponent implements OnInit {
  usuarioNuevo: Usuario = { id: '', nombre: '', tipo_identi: '', identificacion: '', ciudad: '', direccion: '', telefono: '' }
  constructor(private crudservusu: CrudserviceUsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    this.crudservusu.saveUsuario(this.usuarioNuevo).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/dashboard'])
      },
      err => console.log(err)

    );
  }

  back() {
    this.router.navigate(['/dashboard'])
  }
}
