import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { DebugChangeDetectionComponent } from './app.debug-change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    Type1Component,
    Type2Component,
    DebugChangeDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
