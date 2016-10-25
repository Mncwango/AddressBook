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
/// <reference path="../tags.notifications/tags.notifications.component.ts" />
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var contacts_service_1 = require('../../services/contacts.service');
var contact_search_model_1 = require('../../lib/models/contact.search.model');
var tags_service_1 = require('../../services/tags.service');
var ContactSearchComponent = (function () {
    function ContactSearchComponent(contactsService, tagsService) {
        this.contactsService = contactsService;
        this.tagsService = tagsService;
        this.term = new forms_1.FormControl();
    }
    ContactSearchComponent.prototype.search = function (term) {
        var _this = this;
        var contactsModel = new contact_search_model_1.ContactSearchModel();
        if (term.length > 3) {
            if (term.indexOf('#') >= 0) {
                //TODO add Tag service
                var tagName = term.substring(1, term.length);
                this.contactlistResults = null;
                this.tagsService.GetTagsBtName(tagName).then(function (items) { return _this.tagsListResults = items; }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                this.tagsListResults = null;
                this.contactsService.SearchContactBy(term).then(function (items) { return _this.contactlistResults = items; });
            }
        }
        else {
            this.contactlistResults = null;
            this.tagsListResults = null;
        }
    };
    ContactSearchComponent = __decorate([
        core_1.Component({
            selector: 'search-box',
            templateUrl: './app/component/contact.search/contact.search.component.html',
            providers: [contacts_service_1.ContactsService, tags_service_1.TagsService]
        }), 
        __metadata('design:paramtypes', [contacts_service_1.ContactsService, tags_service_1.TagsService])
    ], ContactSearchComponent);
    return ContactSearchComponent;
}());
exports.ContactSearchComponent = ContactSearchComponent;
//# sourceMappingURL=contact.search.component.js.map