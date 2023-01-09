import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User = {
    usuarioId: '',
    password: ''
  }
  constructor(private loginuserservice: LoginuserService,private router:Router) { }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('id');
    this.router.navigate(["/"]);
  }
}