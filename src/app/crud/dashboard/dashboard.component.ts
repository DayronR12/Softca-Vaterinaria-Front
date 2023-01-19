import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudserviceUsuarioService } from 'src/app/services/crudservice-usuario.service';
import { CrudserviceService, Paciente } from 'src/app/services/crudservice.service';
import { LoginuserService } from '../../services/loginuser.service';
import { User } from '../../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  user: User = {
    usuarioId: '',
    password: ''
  }

  lista: any = [];
  listau: any = [];
  constructor(private loginuserservice: LoginuserService, private router: Router,
    private crudserv: CrudserviceService,
    private crudservusu: CrudserviceUsuarioService) { }

  ngOnInit(): void {
    this.listarPacientes();
    this.listarUsuarios();
  }

  listarPacientes() {
    this.crudserv.getPaciente().subscribe(
      res => { this.lista = res },
      err => console.log(err)
    );
  }

  listarUsuarios() {
    this.crudservusu.getUsuario().subscribe(
      res => { this.listau = res },
      err => console.log(err)
    );
  }

  eliminar(id: string) {
    this.crudserv.deletePaciente(id).subscribe(
      res => { this.ngOnInit() },
      err => console.log(err)
    );
  }

  eliminarU(id: string) {
    this.crudservusu.deleteUsuario(id).subscribe(
      res => { this.ngOnInit() },
      err => console.log(err)
    );
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(["/"]);
    window.localStorage.clear();
    console.log("Salió con exito");
    alert("Salió del sistema")

    return true;
  }
}
