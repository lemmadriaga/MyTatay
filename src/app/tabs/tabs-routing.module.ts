import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'voucher',
        loadChildren: () => import('./voucher/voucher.module').then( m => m.VoucherPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'cleaning',
        loadChildren: () => import('./cleaning/cleaning.module').then( m => m.CleaningPageModule)
      },
      {
        path: 'laundry-repair',
        loadChildren: () => import('./laundry-repair/laundry-repair.module').then( m => m.LaundryRepairPageModule)
      },
      {
        path: 'clogged-drains',
        loadChildren: () => import('./clogged-drains/clogged-drains.module').then( m => m.CloggedDrainsPageModule)
      },
      {
        path: 'plumbing',
        loadChildren: () => import('./plumbing/plumbing.module').then( m => m.PlumbingPageModule)
      },
      {
        path: 'wood-works',
        loadChildren: () => import('./wood-works/wood-works.module').then( m => m.WoodWorksPageModule)
      },
      {
        path: 'painter',
        loadChildren: () => import('./painter/painter.module').then( m => m.PainterPageModule)
      },
      {
        path: 'construction',
        loadChildren: () => import('./construction/construction.module').then( m => m.ConstructionPageModule)
      },
      {
        path: 'cabinet-maker',
        loadChildren: () => import('./cabinet-maker/cabinet-maker.module').then( m => m.CabinetMakerPageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'cleaning',
    loadChildren: () => import('./cleaning/cleaning.module').then( m => m.CleaningPageModule)
  },
  {
    path: 'laundry-repair',
    loadChildren: () => import('./laundry-repair/laundry-repair.module').then( m => m.LaundryRepairPageModule)
  },
  {
    path: 'clogged-drains',
    loadChildren: () => import('./clogged-drains/clogged-drains.module').then( m => m.CloggedDrainsPageModule)
  },
  {
    path: 'plumbing',
    loadChildren: () => import('./plumbing/plumbing.module').then( m => m.PlumbingPageModule)
  },
  {
    path: 'wood-works',
    loadChildren: () => import('./wood-works/wood-works.module').then( m => m.WoodWorksPageModule)
  },
  {
    path: 'painter',
    loadChildren: () => import('./painter/painter.module').then( m => m.PainterPageModule)
  },
  {
    path: 'construction',
    loadChildren: () => import('./construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: 'cabinet-maker',
    loadChildren: () => import('./cabinet-maker/cabinet-maker.module').then( m => m.CabinetMakerPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
