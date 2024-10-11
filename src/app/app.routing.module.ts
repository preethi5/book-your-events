import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'event/:id', component:  EventDetailsComponent}];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
