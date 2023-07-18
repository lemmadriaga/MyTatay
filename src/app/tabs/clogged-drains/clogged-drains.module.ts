import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloggedDrainsPageRoutingModule } from './clogged-drains-routing.module';

import { CloggedDrainsPage } from './clogged-drains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloggedDrainsPageRoutingModule
  ],
  declarations: [CloggedDrainsPage]
})
export class CloggedDrainsPageModule {}
