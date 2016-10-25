import {Component,Input} from '@angular/core';
import {TagsService} from '../../services/tags.service';
import {TagsModel} from '../../lib/models/tags.model';
import {PubNubService, PubNubEvent} from '../../services/pubnub.tags.notifications.service';
import {ContactTagAvailable} from '../../pipes/contact.tags.available.pipe';


@Component({
    selector: 'tags-list',
    templateUrl: './app/component/tags.list/tags.list.component.html',
    providers: [TagsService, PubNubService]
    


})

export class TagsListComponent {
    tags: Array<TagsModel>;
    editTagId: number;
    addNew: boolean;
    newTag: TagsModel = new TagsModel();
    channel: string = 'Channel-cl9mz2gjo';
    @Input()
    contactTags: [TagsModel]


    constructor(private tagsService: TagsService, private _pubnubService: PubNubService) { }

    GetTagAllTags() {
        if (!this.tags) {
            this.tagsService.GetAllTags().then(response => {

                this.tags = <Array<TagsModel>>response;
            });
        } else {
            this.tags = null;
        }
    }


    Edit(tag: TagsModel) {
        this.editTagId = tag.id;
    }
    Update(tag: TagsModel) {
        this.editTagId = null;
        this.tagsService.UpdateTag(tag).then(response => {
            console.log(response);
            this.tags = null;
        }).catch(error => {
            console.log(error);
        });
    }

    InsertTag(tagName: string) {
        this.newTag.name = tagName;
        this.newTag.id = 0;
        this.tagsService.AddTag(this.newTag).then(response => {
            console.log(response);
            this.addNew = null;
            this.tags = null;

        }).catch(error => {
            console.log(error);
        });
    }

    AddNewTag() {
        this.addNew = true;
    }

    DeleteTag(tag: TagsModel) {
        this.tagsService.DeleteTag(tag.id).then(response => {
            console.log(response);
            this.tags = null;
        }).catch(error => {
            console.log(error);
        });

    }

    /*this._pubnubService.publish(this.channel, {
                content: 'Something Happened',
                sender_uuid: Math.floor((Math.random() * 100)).toString(),
                date: new Date()
            }).subscribe((event: PubNubEvent) => {
                console.log('Published', event.value);
                // Reset the messageContent input
               // (<Control>this.messageForm.controls['message']).updateValueAndValidity();
            }, (error) => {
                // Handle error here
                console.log('Publish error', JSON.stringify(error));
            }
                );*/
}