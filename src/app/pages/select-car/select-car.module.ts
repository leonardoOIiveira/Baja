import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectCarPage } from './select-car.page';
import { CarItemComponent } from './components/car-item/car-item.component';

const routes: Routes = [
  {
    path: '',
    component: SelectCarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SelectCarPage, 
    CarItemComponent
  ]
})
export class SelectCarPageModule {}
