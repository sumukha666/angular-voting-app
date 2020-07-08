import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from "./auth.service"
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:AuthService, private _route: Router) {}
  canActivate(): boolean {
    if(this._auth.loggedIn() && this._auth.isAdminLogin()){
      return true;
    // } else if(this._auth.loggedIn() && !this._auth.isAdminLogin()){
    //   this._route.navigate(["/admin/topics"]);
    //   return false;
    } else {
      this._route.navigate(["/login"]);
      return false;
    }
  }
}
