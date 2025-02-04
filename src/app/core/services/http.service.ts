import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient
    ) { }

  PegarListaDeEventos() {
    return this.http.get(this.configService.GetEndpoints('eventos'));
  }

  EfetuarLogin(login: {email: string, password: string}) {
    return this.http.post(this.configService.GetEndpoints('login'), {
      username: login.email, 
      password: login.password
    });
  }

  LerDadosDoUsuario(id: string, token: string) {
    var params = {
      headers: {
        "Authorization": `Bearer ${token}`, 
        "Accept": "*/*"
      }
    };
    return this.http.request('get',`${this.configService.GetEndpoints('usuario')}${id}`,params);
  }

  AgendarManutencao(manutencao, token) {
    var params = {
      headers: {
        "Authorization": `Bearer ${token}`, 
        "Accept": "*/*"
      }, 
      body: manutencao
    };
    var urlRequest = this.configService.GetEndpoints('manutencao'); 
    console.log(urlRequest); 
    return this.http.request('post',urlRequest,params);
  }

  FazerPedidoDeCompraDeCarro(obj) {
    return this.http.post(this.configService.GetEndpoints('pedidoCarro'), obj);
  }

  LerListadePatrocinadores() {
    return this.http.get('assets/lists/patrocinadores.txt', {responseType: 'text'});
  }

  LerOArquivoDeCores() {
    return this.http.get('assets/lists/cores.txt', {responseType: 'text'});
  }

  ListaDePecas() {
    return this.http.get(this.configService.GetEndpoints('pecas'));
  }

  EnviarCompraPecas(list, token) {
    var params = {
        headers: {
          "Authorization": `Bearer ${token}`, 
          "Accept": "*/*"
        }, 
        body: list
      }
    return this.http.request('post',this.configService.GetEndpoints('compraPecas'), params); 
  }
}
