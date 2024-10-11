import { EVENTS } from './../../events-data';
import { Component, Input, OnInit } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { Event } from '../model/Event';
import { Subject } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EventCardComponent, MatCardModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  @Input()
  filterValSub = new Subject();
  filterVal: any;

  events = EVENTS;

  ngOnInit(): void {
    this.filterValSub.subscribe((data: any) => {
      //this.filterVal = data.filterVal;
      this.applyFiler(data.filterVal);
    });
  }

  applyFiler(filerVal: string) {
    if (filerVal) {
      this.events = EVENTS;
      const filteredEvents = this.events.filter(
        (eve: Event) =>
          eve.name.toLocaleLowerCase().includes(filerVal.toLocaleLowerCase()) ||
          eve.location.toLocaleLowerCase().includes(filerVal.toLocaleLowerCase()));

      this.events = filteredEvents;
    } else {
      this.events = EVENTS;
    }
  }
}
