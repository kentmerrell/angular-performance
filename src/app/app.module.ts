import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DebugChangeDetectionComponent } from './app.debug-change-detection.component';
import { ChangeDetectionDefaultPageComponent } from './change-detection-default-page/change-detection-default-page.component';
import { ChangeDetectionOnPushPageComponent } from './change-detection-on-push-page/change-detection-on-push-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DebugChangeDetectionComponent,
    ChangeDetectionDefaultPageComponent,
    ChangeDetectionOnPushPageComponent
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
