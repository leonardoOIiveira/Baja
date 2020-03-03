import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar-pecas',
  templateUrl: './comprar-pecas.component.html',
  styleUrls: ['./comprar-pecas.component.scss'],
})
export class ComprarPecasComponent implements OnInit {

  pecas: any[] = []; 

  constructor(
    private http: HttpService, 
    private router: Router) { }

  ngOnInit() {
    this.http.ListaDePecas().subscribe((res: any) => {
      this.pecas = res; 
    })
  }

  AbrirCarrinho() {
    this.router.navigateByUrl('/cart')
  }

  AdicionarAoCarrinho(item) {
    console.log("Adicionando ao carriho"); 
  }

}
