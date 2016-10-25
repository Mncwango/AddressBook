"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="component/tags.notifications/tags.notifications.component.ts" />
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var contact_search_component_1 = require('./component/contact.search/contact.search.component');
var contact_list_component_1 = require('./component/contact.list/contact.list.component');
var tags_search_component_1 = require('./component/tags.search.list/tags.search.component');
var contacts_service_1 = require('./services/contacts.service');
var tags_service_1 = require('./services/tags.service');
var tags_list_component_1 = require('./component/tags.list/tags.list.component');
var contact_details_component_1 = require('./component/contact.details/contact.details.component');
var pubnub_tags_notifications_service_1 = require('./services/pubnub.tags.notifications.service');
var tags_notifications_component_1 = require('./component/tags.notifications/tags.notifications.component');
var contact_tags_available_pipe_1 = require('./pipes/contact.tags.available.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                contacts_service_1.ContactsService,
                tags_service_1.TagsService,
                pubnub_tags_notifications_service_1.PubNubService
            ],
            declarations: [
                app_component_1.AppComponent,
                contact_search_component_1.ContactSearchComponent,
                contact_list_component_1.ContactList,
                tags_search_component_1.TagsSearchComponent,
                tags_list_component_1.TagsListComponent,
                contact_details_component_1.ContactDetailsComponent,
                tags_notifications_component_1.TagsNotificationComponent,
                contact_tags_available_pipe_1.ContactTagAvailable
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map