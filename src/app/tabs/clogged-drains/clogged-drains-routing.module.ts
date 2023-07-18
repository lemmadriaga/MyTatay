import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloggedDrainsPage } from './clogged-drains.page';

const routes: Routes = [
  {
    path: '',
    component: CloggedDrainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloggedDrainsPageRoutingModule {}
