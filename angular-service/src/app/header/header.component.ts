import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from "../auth.service"
import {Router} from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _auth:AuthService, private _router:Router) {}
  @Input() isAdmin;
  @Input() selected;
  ngOnInit( ): void {
  }
  logoutFun(){
    this._auth.clearToken();
    this._router.navigate(["/login"])
  }

}
