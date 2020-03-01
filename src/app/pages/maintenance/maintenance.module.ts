import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintenancePage } from './maintenance.page';
import { AgendarComponent } from './components/agendar/agendar.component';
import { ComprarPecasComponent } from './components/comprar-pecas/comprar-pecas.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MaintenancePage, 
    AgendarComponent, 
    ComprarPecasComponent
  ]
})
export class MaintenancePageModule {}
