import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BajaClubPage } from './baja-club.page';
import { CoreModule } from 'src/app/core/core.module';
import { EventComponent } from './components/event/event.component';
import { EventoModalPageComponent } from './modal/evento-modal-page/evento-modal-page.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: BajaClubPage
  }
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BajaClubPage, 
    EventoModalPageComponent,
    EventComponent, 
    UserInfoComponent
  ], 
  entryComponents: [
    EventoModalPageComponent
  ]
})
export class BajaClubPageModule {}
