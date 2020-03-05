import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private alertController: AlertController,
    private toast: ToastController
    ) { }

  async ApresentarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async Toast(mensagem: string) {
    const al = await this.toast.create({
      message: mensagem, 
      duration: 3000
    }); 
    al.present();

  }
}
