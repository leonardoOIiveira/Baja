import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fotos: string[] = ['assets/img_apre/01.JPG', 'assets/img_apre/02.JPG', 'assets/img_apre/03.JPG']
  constructor() {
  }

}
