import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendFilePageRoutingModule } from './send-file-routing.module';

import { SendFilePage } from './send-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendFilePageRoutingModule
  ],
  declarations: [SendFilePage]
})
export class SendFilePageModule {}
