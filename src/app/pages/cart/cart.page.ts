import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  preco_total: number = 0; 
  listCart: CartItem[] = []; 
  constructor(private cartService: CartService) { 
  }

  UpdateInfo() {
    var res = this.cartService.GetCartInfo(); 
    this.preco_total = res.preco_total;
    this.listCart = res.list; 
  }

  ngOnInit() {
    this.UpdateInfo(); 
  }

}
