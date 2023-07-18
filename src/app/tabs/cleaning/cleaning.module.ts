import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleaningPageRoutingModule } from './cleaning-routing.module';

import { CleaningPage } from './cleaning.page';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleaningPageRoutingModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CleaningPage }])
  ],
  declarations: [CleaningPage,]
})
export class CleaningPageModule {}
