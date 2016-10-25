/// <reference path="../tags.notifications/tags.notifications.component.ts" />
import {Component} from '@angular/core';
import {ContactModel} from '../../lib/models/contact.model';
import {FormControl } from '@angular/forms';
import {ContactsService} from '../../services/contacts.service';
import {ContactSearchModel} from '../../lib/models/contact.search.model';
import {TagsModel} from '../../lib/models/tags.model';
import {TagsService} from '../../services/tags.service';



@Component({
    selector: 'search-box',
    templateUrl: './app/component/contact.search/contact.search.component.html',
    providers: [ContactsService, TagsService]

})

export class ContactSearchComponent {

    contactlistResults: Array<ContactModel>;
    tagsListResults: Array<TagsModel>;
    term = new FormControl();
    constructor(private contactsService: ContactsService, private tagsService: TagsService) {

    }



    search(term) {
        var contactsModel = new ContactSearchModel();
        if (term.length > 3) {
            if (term.indexOf('#') >= 0) {
                //TODO add Tag service
                var tagName = term.substring(1, term.length);
                this.contactlistResults = null;
                this.tagsService.GetTagsBtName(tagName).then(items => this.tagsListResults = <Array<TagsModel>>items).catch(error => {
                    console.log(error);
                });
            } else {
                this.tagsListResults = null;
                this.contactsService.SearchContactBy(term).then(items => this.contactlistResults = <Array<ContactModel>>items);
            }
        } else {
            this.contactlistResults = null;
            this.tagsListResults = null;
        }
    }




}
