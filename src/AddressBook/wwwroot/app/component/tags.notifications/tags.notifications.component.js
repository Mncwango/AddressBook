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
require('rxjs/Rx');
var core_1 = require('@angular/core');
var pubnub_tags_notifications_service_1 = require('../../services/pubnub.tags.notifications.service');
var TagsNotificationComponent = (function () {
    function TagsNotificationComponent(pubNubService) {
        this.pubNubService = pubNubService;
        this.channel = 'Channel-cl9mz2gjo';
        this.messages = new Array();
        this.showMessages = false;
        this.SubScribeToPubNub();
    }
    TagsNotificationComponent.prototype.SubScribeToPubNub = function () {
        var _this = this;
        this.pubNubService.subscribe(this.channel).subscribe(function (event) {
            if (event.type === pubnub_tags_notifications_service_1.PubNubEventType.MESSAGE) {
                _this.messages.push(event.value);
            }
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    TagsNotificationComponent.prototype.OpenMessages = function () {
        if (!this.showMessages) {
            this.showMessages = true;
        }
        else {
            this.showMessages = false;
        }
    };
    TagsNotificationComponent.prototype.remove = function (message) {
        var index = this.messages.indexOf(message);
        this.messages.splice(index, 1);
    };
    TagsNotificationComponent = __decorate([
        core_1.Component({
            selector: 'tag-notification',
            templateUrl: './app/component/tags.notifications/tags.notifications.component.html',
            providers: [pubnub_tags_notifications_service_1.PubNubService],
            styleUrls: ['./app/component/tags.notifications/tags.notification.style.css']
        }), 
        __metadata('design:paramtypes', [pubnub_tags_notifications_service_1.PubNubService])
    ], TagsNotificationComponent);
    return TagsNotificationComponent;
}());
exports.TagsNotificationComponent = TagsNotificationComponent;
//# sourceMappingURL=tags.notifications.component.js.map