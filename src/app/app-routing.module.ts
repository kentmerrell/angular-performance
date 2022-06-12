import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionDefaultPageComponent } from './change-detection-default-page/change-detection-default-page.component';
import { ChangeDetectionOnPushPageComponent } from './change-detection-on-push-page/change-detection-on-push-page.component';

const routes: Routes = [
  {path: 'default', component:ChangeDetectionDefaultPageComponent},
  {path: 'on-push', component:ChangeDetectionOnPushPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
