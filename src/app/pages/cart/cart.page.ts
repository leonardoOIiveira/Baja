import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from 'src/app/core/services/cart.service';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  preco_total: number = 0; 
  listCart: CartItem[] = []; 
  constructor(
    private cartService: CartService, 
    private common: CommonService,
    private router: Router) { 
  }

  UpdateInfo() {
    var res = this.cartService.GetCartInfo(); 
    this.preco_total = res.preco_total;
    this.listCart = res.list; 
  }

  DeletarItem(item) {
    this.cartService.RemoveItemFromCart(item); 
    this.UpdateInfo(); 
  }

  DecreaseItem(item) {
    this.cartService.DecreseItem(item); 
    this.UpdateInfo(); 
  }

  EnviarPedido() {
    this.cartService.SendCartRequest()
    .subscribe((data)=> {
      this.common.Toast('Pedido enviado com sucesso!!'); 
      this.router.navigateByUrl('/baja-club'); 
    }, (error) => {

    }); 
  }

  ngOnInit() {
    this.UpdateInfo(); 
  }

}
