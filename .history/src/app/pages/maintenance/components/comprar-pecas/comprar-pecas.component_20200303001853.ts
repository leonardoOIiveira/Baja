import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-comprar-pecas',
  templateUrl: './comprar-pecas.component.html',
  styleUrls: ['./comprar-pecas.component.scss'],
})
export class ComprarPecasComponent implements OnInit {

  pecas: any[]; 

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.ListaDePecas().subscribe((res: any) => {
      this.pecas = res; 
    })
  }

  AbrirCarrinho() {
    
  }

}
