import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PortalExampleComponent } from './portal-example.component';

const routes: Routes = [
  {
    path: '', component: PortalExampleComponent, pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalExampleRoutingModule { }
