import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService } from 'src/app/services/event.service';
import { UtilsService } from 'src/app/services/utils.service';

import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  id: string;
  resEvent: Event;
  weHaveResults: boolean;

  constructor(
    private eventService: EventService,
    private utils: UtilsService,
    private location: Location,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      // this.profileType = this.utils.capitalizeFirstLetter(this.profileType.toLowerCase());
    });
    this.getEventById(this.id);    
  }

  getEventById(id: string) {
    this.weHaveResults = false;
    this.eventService.getEventById(id)
      .subscribe(res => {
        // this.resEvent = res as Event;
        this.resEvent = <Event>res;
        console.log(this.resEvent);
        this.weHaveResults = true;
      });
  }    

  goBack() {
    this.location.back();
  }  

}
