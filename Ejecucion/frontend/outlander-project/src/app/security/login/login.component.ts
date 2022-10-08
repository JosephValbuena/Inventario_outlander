import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPasswFlag: boolean = false;
  username: string = '';
  password: string = '';
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  goToMain(): void {
    if (this.username == 'joseph' && this.password == 'password') {
      this.router.navigate(['tables/list']);
    } else {
      alert('usuario y/o contraseña incorrecto.')
    }
  }

  showPassword(): void {
    this.showPasswFlag = !this.showPasswFlag; 
  }

}
