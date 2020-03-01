import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseLink: string = 'http://127.0.0.1:3000';
  private login: string = '/api/auth/login';
  private eventos: string = '/api/events';
  private usuario: string = '/api/users/';
  private manutencao: string = '/api/manutencao';

  constructor() { }

  GetEndpoints(variable) {
    return this.baseLink + this[variable];
  }
}



