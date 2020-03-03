import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-peca-item',
  templateUrl: './peca-item.component.html',
  styleUrls: ['./peca-item.component.scss'],
})
export class PecaItemComponent implements OnInit {

  @Output() addToCart = new EventEmitter(); 
  @Input() peca: any;
  constructor() { }

  ngOnInit() {}

  AdicionarAoCarrinho() {
    this.addToCart.emit(); 
  }



}
