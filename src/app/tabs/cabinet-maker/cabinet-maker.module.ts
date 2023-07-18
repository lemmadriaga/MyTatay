import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabinetMakerPageRoutingModule } from './cabinet-maker-routing.module';

import { CabinetMakerPage } from './cabinet-maker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabinetMakerPageRoutingModule
  ],
  declarations: [CabinetMakerPage]
})
export class CabinetMakerPageModule {}
