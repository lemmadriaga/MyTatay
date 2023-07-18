import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaundryRepairPage } from './laundry-repair.page';

const routes: Routes = [
  {
    path: '',
    component: LaundryRepairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryRepairPageRoutingModule {}
