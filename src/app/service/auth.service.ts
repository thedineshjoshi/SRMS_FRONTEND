import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Model/login.model';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../Model/jwtPayload/jwtPayload.module';
import { Router } from '@angular/router';
import { WindowRefService } from './window.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpService:HttpClient,private _route:Router,private windowRef: WindowRefService) { }
  
  login(login:Login):Observable<any> {
    return this._httpService.post("http://localhost:5173/api/Login/login",login);
  }

  decodeToken():JwtPayload
  {
    const window = this.windowRef.nativeWindow;
    // const token = window.localStorage.getItem('token');
    if (window && window.localStorage) {
      const token = window.localStorage.getItem('token');
    if(token)
    {
      return jwtDecode(token);
    }
  }
    
    {
    return new JwtPayload();
    }
  }

  getTokenExpirationDate(): Date{
    const decodedToken = this.decodeToken();
    if(decodedToken && decodedToken.exp){
      const date = new Date();
      date.setUTCSeconds(decodedToken.exp);
      return date;
    }
    else{
      return new Date();
    }
  }

  isTokenExpired():boolean{
    const tokenExpirationDate = this.getTokenExpirationDate()
    if(tokenExpirationDate)
    {
      return !(tokenExpirationDate.valueOf()>new Date().valueOf());
    }
    else
    {
      return false;
    }
  }

  logout(){
    const window = this.windowRef.nativeWindow;
    if (window && window.localStorage) {
      window.localStorage.clear();
    }
    this._route.navigateByUrl("");
  }
  }
