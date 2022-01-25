import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private authService: AuthService,private router:Router)
  { this.email="",this.password=""; }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.email,this.password)
    .subscribe( resp => {
      console.log(resp);
      localStorage.setItem('token',JSON.stringify(resp));
      this.authService.loginGuard();
      this.router.navigateByUrl('/home');

    })
}

}
