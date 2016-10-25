import {Component, Input} from '@angular/core';
import {ContactModel} from '../../lib/models/contact.model';
import {TagsModel} from '../../lib/models/tags.model';

@Component({
    selector: 'contact-results',
    templateUrl: '/app/component/contact.list/contact.list.component.html'
})

export class ContactList {
    @Input()
    contactsList: [ContactModel];
    contactdetail: ContactModel;
    contactTags: [TagsModel];


    showDetails(contact: ContactModel) {
        this.contactdetail = contact;
        this.contactTags = contact.tags;
    }

}