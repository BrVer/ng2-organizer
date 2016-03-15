import { Component, OnInit }    from 'angular2/core';
import { Router }               from 'angular2/router';
import * as _                   from 'underscore';

import { Note }                 from './note';
import { Event }                from './event';
import { NoteService }          from './note.service';
import { EventService }         from './event.service';

@Component({
    selector: 'org-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    notes: Note[] = [];
    events: Event[] = [];
    constructor(
        private _router: Router,
        private _noteService: NoteService,
        private _eventService: EventService
    ) {}
    ngOnInit() {
        this._noteService.getNotes()
            .then(notes => this.notes = _.filter(notes, (note) => { return note.priority < 2;}));
        this._eventService.getEvents()
            .then(events => this.events = _.filter(events, (event) => { return event.date_start > new Date;}));
    }
    gotoNoteDetail(note: Note) {
        let link = ['NoteDetail', { id: note.id }];
        this._router.navigate(link);
    }
    gotoEventDetail(event: Event) {
        let link = ['eventDetail', { id: event.id }];
        this._router.navigate(link);
    }
}