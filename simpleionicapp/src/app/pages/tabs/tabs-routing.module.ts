import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
children:[
      {
        path: 'films',
  children: [
          {
            path: '',
  loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
  loadChildren: () => import('../films-details/films-details.module').then( m => m.FilmsDetailsPageModule)	
          }
        ]
      },
      {
        path: 'people',
  children:[
          {
            path: '',
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
