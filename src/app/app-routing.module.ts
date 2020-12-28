import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'portal', loadChildren: () => import('./portal-example/portal-example.module').then(m => m.PortalExampleModule)},
  {path: 'dialog', loadChildren: () => import('./dialog/dialog.module').then(m => m.DialogModule)},
  {path: '', redirectTo: '/portal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
