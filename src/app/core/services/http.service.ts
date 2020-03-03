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
    return this.http.request('post',`${this.configService.GetEndpoints('manutecao')}`,params);
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
}
