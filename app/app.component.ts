import { Component }                                        from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { EventService }         from './event.service';
import { NoteService }          from './note.service';
import { DashboardComponent }   from './dashboard.component';
//import { EventsComponent }      from './events.component';
//import { EventDetailComponent } from './event-detail.component';
//import { NotesComponent }       from './notes.component';
//import { NoteDetailComponent }  from './note-detail.component';

@Component({
    selector: 'ng2-organizer',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        EventService,
        NoteService
    ]
})

//@RouteConfig([
//    {
//        path: '/dashboard',
//        name: 'Dashboard',
//        component: DashboardComponent,
//        useAsDefault: true
//    },{
//        path: '/events',
//        name: 'Events',
//        component: EventsComponent
//    },{
//        path: '/events/:id',
//        name: 'EventDetail',
//        component: EventDetailComponent
//    },{
//        path: '/notes',
//        name: 'Notes',
//        component: NotesComponent
//    },{
//        path: '/notes/:id',
//        name: 'NoteDetail',
//        component: NoteDetailComponent
//    }
//])

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }
])
export class AppComponent {
    title = 'Angular2 Organizer';
}