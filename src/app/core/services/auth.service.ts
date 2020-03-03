import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, observable } from "rxjs";
import { Usuario } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any; 
  private isLogged: boolean = false; 
  
  constructor(private httpService: HttpService) {
    const user = localStorage.getItem('userInfo'); 
    this.isLogged = user ? true : false;
  }

  Login(email: string, password: string) {
    return new Observable((observer:any) => {
      this.httpService.EfetuarLogin({email, password})
      .subscribe(
        (data:any) => {
          localStorage.setItem('userInfo', JSON.stringify(data));
          this.isLogged = true;
          observer.next({status: true});
          observer.complete();
        },
        (error:any) => {
          this.isLogged = false;
          observer.next({status: false, msg: error});
          observer.complete();
        }
      );
    });

  }

  Logout() {
    localStorage.removeItem('userInfo'); 
    this.isLogged = false;
    return true; 
  }

  isLoggedIn() {
    return this.isLogged;
  }

  ReadUserInfo() {
    var user: any = JSON.parse(localStorage.getItem('userInfo')); 
    if(!user) return new Observable(observer => {
      observer.next(false);
      observer.complete(); 
    }); 

    return this.httpService.LerDadosDoUsuario(user.user.id, user.access_token);
  }

  GetUserToken() {
    var user: any = JSON.parse(localStorage.getItem('userInfo')); 
    if(!user) return false; 
    else return user.access_token; 
  }
}