import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaintenancePage } from './maintenance.page';
import { AgendarComponent } from './components/agendar/agendar.component';
import { ComprarPecasComponent } from './components/comprar-pecas/comprar-pecas.component';
import { PecaItemComponent } from './components/peca-item/peca-item.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
    PecaItemComponent, 
    ComprarPecasComponent
  ]
})
export class MaintenancePageModule {}
