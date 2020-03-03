import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private alertController: AlertController) { }

  async ApresentarAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Aleta',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
}
