import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoodWorksPage } from './wood-works.page';

const routes: Routes = [
  {
    path: '',
    component: WoodWorksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoodWorksPageRoutingModule {}
