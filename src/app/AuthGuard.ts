import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  public token : any = localStorage.getItem("token")!

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {

      const tokenData=JSON.parse(this.token);
      console.log(tokenData["access_token"])

      return this.authService.isValid(tokenData["access_token"]).subscribe({
      next: (resp) =>{return true},
      error: (err) => {
        this.router.navigateByUrl('/login')
        return false
      }}
      );

  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.canActivate(route, state);

  }
}


