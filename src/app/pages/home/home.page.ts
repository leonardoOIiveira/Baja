import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topStories: any;

  constructor() {

    this.topStories = [
      {picture: "/src/assets/imgs/logo-baja.png"},
      {picture: "/src/assets/imgs/img2.JPG"},
      {picture: "/src/assets/imgs/img3.JPG"}
    ]

  }

}
