import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Event } from '../model/Event';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit{

  @Input()
  event!: Event;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  viewEventDetail(eventId : any){
    let url: string = "/event/" + eventId
         this.router.navigateByUrl(url);
      }
}
