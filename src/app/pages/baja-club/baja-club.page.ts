import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { EventoBaja } from 'src/app/core/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { EventoModalPageComponent } from './modal/evento-modal-page/evento-modal-page.component';
import { CommonService } from 'src/app/core/services/common.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Usuario } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-baja-club',
  templateUrl: './baja-club.page.html',
  styleUrls: ['./baja-club.page.scss'],
})
export class BajaClubPage implements OnInit {


  segmentView;
  listaEventos: EventoBaja[];
  logado: boolean = false; 

  /** Variaveis para o login */
  email: string; 
  password: string; 
  patrocinadores: any; 

  /** Dados completos do usuario */
  usuario: any = null;

  constructor(
    private http: HttpService,
    private modalController: ModalController,
    private commonService: CommonService, 
    private authService: AuthService
    ) { 
      this.logado = this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.http.PegarListaDeEventos().subscribe((res: EventoBaja[]) => {
      console.log(res);
      this.listaEventos = res.reverse();
    });
    this.LerDadosUsuario(); 
    //Lendo a lista de patrocinadores 
    this.http.LerListadePatrocinadores().subscribe((res) => {
      this.patrocinadores = res.split('\n'); 
    })
  }

  segmentChanged(event){

  }

  async InfoEvento(item) {
    const modal = await this.modalController.create({
      component: EventoModalPageComponent,
      componentProps: {
        'evento': item
      }
    });
    return await modal.present();
  }

  Login() {
    this.authService.Login(this.email, this.password)
    .subscribe((res: any) => {
      if(res.status){
        console.log('login feito com sucesso'); 
        this.logado = this.authService.isLoggedIn();
        this.LerDadosUsuario(); 
      } else {
        console.log('Erro ao efetuar o login', res.msg);
      }
    });
    //this.commonService.ApresentarAlerta();
  }

  Logout() {
    console.log('saindo')
    this.authService.Logout();
    this.logado = this.authService.isLoggedIn();
  }

  async LerDadosUsuario() {
    await this.authService.ReadUserInfo()
    .subscribe((res:any) => {
      if(res)
        this.usuario = res; 
    });
  }

}
