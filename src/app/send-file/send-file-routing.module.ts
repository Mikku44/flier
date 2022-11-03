import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendFilePage } from './send-file.page';

const routes: Routes = [
  {
    path: '',
    component: SendFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendFilePageRoutingModule {}
