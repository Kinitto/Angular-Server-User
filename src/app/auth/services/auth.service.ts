import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  public token : any = localStorage.getItem("token")!
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

     const tokenData=JSON.parse(this.token);
          console.log(tokenData["access_token"])

      this.isValid(tokenData["access_token"]).subscribe({
        next: (resp: any) => console.log(resp),
        error: (err: any) => console.log(err)}
        )

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
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer${token}`
    })
    const options ={headers:headers}
    return this.http.get(url,options);
  }

}
