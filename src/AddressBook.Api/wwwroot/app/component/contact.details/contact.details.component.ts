import {Component, Input} from '@angular/core';
import {ContactModel} from '../../lib/models/contact.model'
@Component({
    selector: 'contact-details',
    templateUrl: './app/component/contact.details/contact.details.component.html'

})

export class ContactDetailsComponent {
    @Input()
    contactDetails: ContactModel;

}