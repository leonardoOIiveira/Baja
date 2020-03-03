import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private preco_total: number = 0; 
  private carrinho: CartItem[] = [];

  constructor(private http: HttpService) { }

  GetCartInfo() : {preco_total: number, list: CartItem[]} {
    var cart = {
      preco_total: this.preco_total, 
      list: this.carrinho
    }; 
    return cart; 
  }

  AddItemToCart(item: CartItem) {
    var index = this.carrinho.findIndex(x => x._id === item._id); 
    if(index == -1) { // Não encontrou o obj
      this.carrinho.push(item); 
    } else {
      console.log(this.carrinho); 
      this.carrinho[index].quant += 1; 
      console.log(this.carrinho, 'depois')
    }
    this.preco_total += item.preco;
    return true; 
  }

  RemoveItemFromCart(item: CartItem) {
    var index = this.carrinho.findIndex(x => x._id == item._id); 
    if(index != -1) {
      console.log('Elemento a ser removido:', this.carrinho[index]); 
      this.carrinho.splice(index, 1); 
      this.preco_total -= item.preco;
      console.log(this.carrinho); 
      return true; 
    } else return false; 
  }

  DecreseItem(item: CartItem) {
    var index = this.carrinho.findIndex(x => x._id == item._id); 
    if(index != -1) {
      if(this.carrinho[index].quant == 1) {
        this.RemoveItemFromCart(item); 
      } else {
        this.carrinho[index].quant--; 
      } 
      this.preco_total -= item.preco; 
      return true; 
    } else return false; 
  }

  SendCartRequest() {
    var requestArray = this.carrinho.map((item) => {
      return {
        peca_id: item._id, 
        quant: item.quant
      }; 
    });
    return this.http.EnviarCompraPecas(requestArray);
  }
}

export interface CartItem {
  _id: string; 
  nome: string; 
  desc: string; 
  preco: number; 
  quant: number; 
}
