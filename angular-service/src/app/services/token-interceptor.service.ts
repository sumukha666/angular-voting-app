import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http"
import {AuthService} from "../auth.service"
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injectore: Injector) { }

  intercept(req,next){
    const authService = this.injectore.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
