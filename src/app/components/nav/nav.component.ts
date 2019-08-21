import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe( next => {
      console.log('Logged in Successfully');
    }, error => {
      console.log(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.clear();
    console.log('logged out');
  }

}
