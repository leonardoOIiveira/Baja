import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarPage } from './car.page';
import { ColorPickerModule } from 'ngx-color-picker';

const routes: Routes = [
  {
    path: '',
    component: CarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ColorPickerModule
  ],
  declarations: [CarPage]
})
export class CarPageModule {}
