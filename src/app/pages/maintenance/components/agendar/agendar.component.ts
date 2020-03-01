import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss'],
})
export class AgendarComponent implements OnInit {

  @Output() manutencao = new EventEmitter(); 

  formManutencao: FormGroup = new FormGroup({
    agenda: new FormControl(null, Validators.required), 
    desc: new FormControl(null, Validators.required), 
    local: new FormControl(null, Validators.required)
  });
  
  constructor() { }

  ngOnInit() {}

  Comprar() {
    if(!this.formManutencao.valid) {
      console.log('erro'); 
    } else {
      var manutencao = this.formManutencao.value; 
      
      this.manutencao.emit(manutencao);
    }
  }
}
