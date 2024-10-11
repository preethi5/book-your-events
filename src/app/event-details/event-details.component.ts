import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EVENTS } from './../../events-data';
import { Event } from '../model/Event';


@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  event!: Event;
  events = EVENTS;
  constructor(  private route: ActivatedRoute  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    console.log('eve id', eventId);
    this.event = this.events.find((e : Event) => e.id == eventId);

  }

}
