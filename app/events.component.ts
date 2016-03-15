import { Component, OnInit }    from 'angular2/core';
import { Router }               from 'angular2/router';

import { Event }                from './event';
import { EventService }         from './event.service';

@Component({
    selector: 'org-events',
    templateUrl: 'app/events.component.html',
    styleUrls: ['app/events.component.css']
})
export class EventsComponent implements OnInit {
    events: Event[] = [];
    constructor(
        private _router: Router,
        private _eventService: EventService
    ) {}
    ngOnInit() {
        this._eventService.getEvents()
            .then(events => this.events = events);
    }
    gotoEventDetail(event: Event) {
        let link = ['eventDetail', { id: event.id }];
        this._router.navigate(link);
    }
}