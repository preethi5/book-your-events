import { Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'event/:id', component:  EventDetailsComponent}];
