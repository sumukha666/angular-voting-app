import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl ="http://127.0.0.1:3000/login/"
  constructor(private http: HttpClient) {  }

  userLogin(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
