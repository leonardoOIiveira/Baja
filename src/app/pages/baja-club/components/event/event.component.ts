import { Component, OnInit, Input } from '@angular/core';
import { EventoBaja } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  @Input() evento: EventoBaja;
  constructor() { }

  ngOnInit() {}

}
