
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

  r: boolean | undefined;

  usuarioId: any;
  password: any;




  constructor(private loginuserservice: LoginuserService, private router: Router) { }

  login() {
    var user = this.usuarioId;
    var pass = this.password;

    this.loginuserservice.login(user,pass).subscribe((data:boolean) => {
      this.r = data;

      if (this.r == true) {
        this.router.navigate(["/dashboard"])
      } else{
        alert("Usuario o Contraseña invalidos")
      }


    });
  }


  ngOnInit(): void {
  }



}

