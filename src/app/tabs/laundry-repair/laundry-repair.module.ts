import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaundryRepairPageRoutingModule } from './laundry-repair-routing.module';

import { LaundryRepairPage } from './laundry-repair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaundryRepairPageRoutingModule
  ],
  declarations: [LaundryRepairPage]
})
export class LaundryRepairPageModule {}
