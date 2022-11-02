import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycontactPageRoutingModule } from './mycontact-routing.module';

import { MycontactPage } from './mycontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycontactPageRoutingModule
  ],
  declarations: [MycontactPage]
})
export class MycontactPageModule {}
