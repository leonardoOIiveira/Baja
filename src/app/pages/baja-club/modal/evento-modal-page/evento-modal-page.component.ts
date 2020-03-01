import { Component, OnInit,  Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { EventoBaja } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-evento-modal-page',
  templateUrl: './evento-modal-page.component.html',
  styleUrls: ['./evento-modal-page.component.scss'],
})
export class EventoModalPageComponent implements OnInit {

  @Input() evento: EventoBaja;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log('dentro da pagina de detalhes do evento');
    console.log(this.evento);
  }

  Dismiss() {
    this.modalController.dismiss();
  }

}
