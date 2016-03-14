import {NOTES} from './mock-notes';
import {Injectable} from 'angular2/core';

@Injectable()
export class NoteService {
    getNotes() {
        return Promise.resolve(NOTES);
    }
    getNote(id: number) {
        return Promise.resolve(NOTES).then(
            notes => notes.filter(note => note.id === id)[0]
        );
    }
}