import {EVENTS} from './mock-events';
import {Injectable} from 'angular2/core';

@Injectable()
export class EventService {
    getEvents() {
        return Promise.resolve(EVENTS);
    }
    getEvent(id: number) {
        return Promise.resolve(EVENTS).then(
            events => events.filter(event => event.id === id)[0]
        );
    }
}