import 'rxjs/Rx';
import {Component} from '@angular/core'
import {PubNubService, PubNubEventType, PubNubEvent} from '../../services/pubnub.tags.notifications.service';

@Component({
    selector: 'tag-notification',
    templateUrl:'./app/component/tags.notifications/tags.notifications.component.html',
    providers: [PubNubService],
    styleUrls:['./app/component/tags.notifications/tags.notification.style.css']
    
 
})

export class TagsNotificationComponent {

    channel: string = 'Channel-cl9mz2gjo';

    messages: Array<any> = new Array<any>();
    showMessages: boolean = false;
    

    constructor(private pubNubService: PubNubService) {
        this.SubScribeToPubNub();

    }

    SubScribeToPubNub() {
        this.pubNubService.subscribe(this.channel).subscribe((event: PubNubEvent) => {
            if (event.type === PubNubEventType.MESSAGE) {
                this.messages.push(event.value);
            }
        }, (error) => {
            console.log(JSON.stringify(error));
        });
    }

    OpenMessages() {
        if (!this.showMessages) {
            this.showMessages = true;
        } else {
            this.showMessages = false;
        }
    }

    remove(message: string) {
        var index = this.messages.indexOf(message);
        this.messages.splice(index, 1);
    }
    

    

}
