import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarModelComponent } from './car-model/car-model.component';

@NgModule({
  declarations: [CarModelComponent],
  imports: [
    CommonModule, 
    IonicModule, 
    CarModelComponent
  ]
})
export class ComponentsModule { }
