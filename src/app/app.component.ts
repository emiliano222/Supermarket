import { Component } from '@angular/core';
import {LoginService} from './services/login-service.service';
import {Router} from '@angular/router';
import {SharedServiceService} from './services/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  logged=false;

  constructor(private loginService:LoginService, private router:Router, private sharedService:SharedServiceService) {
    let userLogged = JSON.parse(localStorage.getItem('user'));
    if (userLogged != null) {
      let token: string [] = atob(localStorage.getItem('token')).split(':');
      let user = {username: token[0], password: token[1]};
      this.loginService.login(user).subscribe(data => {
        console.log('logged ' + data)
        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('token', btoa(user.username + ':' + user.password));
        this.logged = true;
        this.router.navigate(['lista-prodotti']);
      }, err => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.logged = false;
        this.router.navigate(['login']);
      })
    }
    sharedService.changeEmitted$.subscribe(text => {
      console.log(text);
      this.logged = true;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout().subscribe(() => {
      console.log('logged out.')
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      this.logged = false;
    }, err => {
      console.log(err)
    })
  }



}


