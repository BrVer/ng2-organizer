import { Component, OnInit }    from 'angular2/core';
import { Router }               from 'angular2/router';

import { Note }                 from './note';
import { NoteService }          from './note.service';

@Component({
    selector: 'org-events',
    templateUrl: 'app/notes.component.html',
    styleUrls: ['app/notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: Note[] = [];
    constructor(
        private _router: Router,
        private _noteService: NoteService
    ) {}
    ngOnInit() {
        this._noteService.getNotes()
            .then(notes => this.notes = notes);
    }
    gotoNoteDetail(note: Note) {
        let link = ['NoteDetail', { id: note.id }];
        this._router.navigate(link);
    }
}