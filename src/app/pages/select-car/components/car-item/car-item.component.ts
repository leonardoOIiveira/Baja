import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent implements OnInit {

  @Input() item: any; 
  
  constructor() { }

  ngOnInit() {}

}
