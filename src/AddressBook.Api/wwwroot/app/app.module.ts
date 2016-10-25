/// <reference path="component/tags.notifications/tags.notifications.component.ts" />
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {ContactSearchComponent} from './component/contact.search/contact.search.component';
import {ContactList} from './component/contact.list/contact.list.component';
import {TagsSearchComponent} from './component/tags.search.list/tags.search.component';
import {ContactsService} from './services/contacts.service'
import {TagsService} from './services/tags.service'
import {TagsListComponent} from './component/tags.list/tags.list.component';
import {ContactDetailsComponent} from './component/contact.details/contact.details.component';
import {PubNubService} from './services/pubnub.tags.notifications.service';
import {PushNotificationsModule, NotificationsService} from 'angular2-notifications';
import {TagsNotificationComponent} from './component/tags.notifications/tags.notifications.component';
import {ContactTagAvailable} from './pipes/contact.tags.available.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        PushNotificationsModule
    ],
    providers: [
        ContactsService,
        TagsService,
        PubNubService,
        NotificationsService
    ],
    declarations: [
        AppComponent,
        ContactSearchComponent,
        ContactList,
        TagsSearchComponent,
        TagsListComponent,
        ContactDetailsComponent,
        TagsNotificationComponent,
        ContactTagAvailable

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]   
})
export class AppModule { }