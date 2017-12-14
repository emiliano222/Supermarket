import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(data => {
      console.log(data);
      localStorage.setItems('user', JSON.stringify(data));
      localStorage.setItems('token', btoa(this.user.username + ':' + this.user.password));
      console.log(localStorage.getItem('token'));
      this.router.navigate(['lista-prodotti']);
    }), err => {
      console.error(err);
    }
  }
}
