import {FirebaseService as DataService} from './firebase.service'
import {Injectable}                     from 'angular2/core';

@Injectable()
export class NoteService {
    getNotes() {
        return DataService.getData('notes');
    }
    getNote(id: number) {
        return this.getNotes().then(
            notes => notes.filter(note => note.id === id)[0]
        );
    }
}