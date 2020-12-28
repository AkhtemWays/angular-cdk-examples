import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActionBtnComponent } from './action-btn/action-btn.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PortalExampleRoutingModule } from './portal-example-routing.module';
import { PortalExampleComponent } from './portal-example.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, PortalExampleComponent, ActionBtnComponent],
  entryComponents: [ActionBtnComponent],
  imports: [
    CommonModule,
    PortalModule,
    PortalExampleRoutingModule,
    MatButtonModule
  ]
})
export class PortalExampleModule { }
