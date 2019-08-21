import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as env from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

private headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

login(model: any) {
  return this.http.post(`${env.environment.baseUri}/auth/login`, model)
             .pipe(
               map( (response:any) => {
                 const user = response;
                 if(user) {
                   localStorage.setItem('token', user.token);
                 }
               })
             );
}

register(model: any) {
  return this.http.post(`${env.environment.baseUri}/auth/register`, model);
}

}
