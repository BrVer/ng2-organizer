import {FirebaseService as DataService} from './firebase.service'
import {Injectable}                     from 'angular2/core';
import * as _                           from 'underscore';

@Injectable()
export class EventService {
    getEvents() {
        return DataService.getData('events').then(
            events => _.each(events, (event) => {
                event.date_start = new Date(event.date_start);
                event.date_end = new Date(event.date_end);
            })
        );
    }
    getEvent(id: number) {
        return this.getEvents().then(
            events => events.filter(event => event.id === id)[0]
        );
    }
}