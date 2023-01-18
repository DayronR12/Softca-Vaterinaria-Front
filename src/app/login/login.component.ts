import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { interval } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {
    usuarioId: null,
    password: null
  };

  constructor(private loginuserservice: LoginuserService, private router: Router) { }

  login() {
    var user = this.model.usuarioId;
    var pass = this.model.password;

    this.loginuserservice.login(user, pass).subscribe(data => {

      if (user == null && pass == null) {
        alert("Datos incompletos")
      } else if (data) {
        localStorage.setItem('usuario', JSON.stringify(this.model.usuarioId, this.model.password));
        console.log('usuarioId', 'password');

        this.router.navigate(["/dashboard"])
      } else {
        alert("Usuario o Contraseña invalidos")
      }
    });
  }

  user(user: any): string {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
}

