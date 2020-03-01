import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  @Input() usuario: Usuario; 
  constructor() { }

  ngOnInit() {
    console.log(this.usuario);
  }

}
