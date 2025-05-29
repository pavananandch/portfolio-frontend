import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-components/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { SharedModule } from './shared/shared.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ElementModule } from './element.module';
import { DemosComponent } from './components/demos/demos.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorsComponent,
    DemosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    NgxPageScrollCoreModule,
    ElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
