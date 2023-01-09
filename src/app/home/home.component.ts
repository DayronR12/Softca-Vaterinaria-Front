import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    window.localStorage.clear();
    console.log("Salió con exito");
    alert("Salió del sistema")

    return true;
  }
}
