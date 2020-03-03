import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-comprar-pecas',
  templateUrl: './comprar-pecas.component.html',
  styleUrls: ['./comprar-pecas.component.scss'],
})
export class ComprarPecasComponent implements OnInit {

  pecas: any[] = []; 

  constructor(
    private http: HttpService, 
    private router: Router, 
    private cartService: CartService, 
    private common: CommonService) { }

  ngOnInit() {
    this.http.ListaDePecas().subscribe((res: any) => {
      this.pecas = res; 
    })
  }

  AbrirCarrinho() {
    this.router.navigateByUrl('/cart')
  }

  AdicionarAoCarrinho(item) {
    var newItem = item; 
    newItem['quant'] = 1; 
    var result = this.cartService.AddItemToCart(newItem); 
    if(result)
      this.common.Toast('Item adicionado ao carrinho!'); 
  }

}
