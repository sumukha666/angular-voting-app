import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { AuthService } from "../auth.service"
export class UserLogin {
  public userId: string;
  public password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private _auth:AuthService, private _route: Router) {}

  ngOnInit(): void {}

  model = new UserLogin();

  onSubmit(form) {
    this._auth.userLogin(form.value)
      .subscribe(
        res=> {
              localStorage.setItem('token',res["token"]);
              localStorage.setItem('isAdmin',res["isAdmin"]);
              (res["isAdmin"]) ? this._route.navigate(["/admin/home"]) : this._route.navigate(["/user/home"]);
            },
        err=> console.log(err)
      );
  }
}
