import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post(url, body);
  }

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {

          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  loginGuard() {
    this.loggedIn = true;
  }

  isValid(token:string){
    const url = 'http://localhost:8000/token';
    const headers = new HttpHeaders().set('Authorization',`Bearer${token}`)

    const options ={headers:headers}
    return this.http.get(url,options);
  }

}
