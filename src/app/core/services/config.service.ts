import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private baseLink: string = 'http://ec2-3-133-83-196.us-east-2.compute.amazonaws.com:3000';
  private login: string = '/api/auth/login';
  private eventos: string = '/api/events';
  private usuario: string = '/api/users/';
  private manutencao: string = '/api/manutencao';
  private pedidoCarro: string = '/api/comprar/carro';
  private pecas: string = '/api/pecas';

  constructor() { }

  GetEndpoints(variable) {
    return this.baseLink + this[variable];
  }
}



