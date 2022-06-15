import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { GrandchildComponent } from './grandchild.component';
import { CousinComponent } from './cousin.component';
import { UncleComponent } from './uncle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CousinComponent,
    GrandchildComponent,
    ParentComponent,
    UncleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
