import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoodWorksPageRoutingModule } from './wood-works-routing.module';

import { WoodWorksPage } from './wood-works.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoodWorksPageRoutingModule
  ],
  declarations: [WoodWorksPage]
})
export class WoodWorksPageModule {}
