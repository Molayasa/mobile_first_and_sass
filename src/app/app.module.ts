import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColombianPointsComponent } from './components/colombian-points/colombian-points.component';
import { UberComponent } from './components/uber/uber.component';

@NgModule({
  declarations: [
    AppComponent,
    ColombianPointsComponent,
    UberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
