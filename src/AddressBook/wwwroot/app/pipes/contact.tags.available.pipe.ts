import {Pipe, PipeTransform} from '@angular/core';
import {TagsModel} from '../lib/models/tags.model'

@Pipe({
    name: 'TagAvailable',
    pure: false
})

export class ContactTagAvailable implements PipeTransform {
    transform(contactTags: [TagsModel], currentTag: TagsModel): boolean {

        if (contactTags.length > 0 && currentTag !== null) {

            for (let item of contactTags) {
                if (item.id == currentTag.id) {
                    return true;
                }
            }

            return false;
        } else {
            return false;
        }

    }

}