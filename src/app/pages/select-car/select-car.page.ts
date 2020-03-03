import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.page.html',
  styleUrls: ['./select-car.page.scss'],
})
export class SelectCarPage implements OnInit {

  carModels = [
    {
        nome: 'Nome do carro', 
        img: 'assets/carro/model1/01.jpeg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
