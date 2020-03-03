import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  @Input('cart_item') item: CartItem; 
  @Output('delete') removerItemCompleto = new EventEmitter(); 
  @Output('decrease') removerUmDoItem = new EventEmitter(); 

  constructor() { }

  ngOnInit() {}

  RemoveItem() {
    this.removerItemCompleto.emit(); 
  }

  DecreaseItem() {
    this.removerUmDoItem.emit(); 
  }

}
