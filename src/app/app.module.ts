import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalExampleModule } from './portal-example/portal-example.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    A11yModule,
    MatButtonModule,
    PortalExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
