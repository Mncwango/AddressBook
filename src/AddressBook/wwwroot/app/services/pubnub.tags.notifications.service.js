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
var core_1 = require('@angular/core');
(function (PubNubEventType) {
    PubNubEventType[PubNubEventType["MESSAGE"] = 0] = "MESSAGE";
    PubNubEventType[PubNubEventType["CONNECT"] = 1] = "CONNECT";
    PubNubEventType[PubNubEventType["DISCONNECT"] = 2] = "DISCONNECT";
    PubNubEventType[PubNubEventType["RECONNECT"] = 3] = "RECONNECT";
    PubNubEventType[PubNubEventType["PUBLISHED"] = 4] = "PUBLISHED";
    PubNubEventType[PubNubEventType["HISTORY"] = 5] = "HISTORY";
})(exports.PubNubEventType || (exports.PubNubEventType = {}));
var PubNubEventType = exports.PubNubEventType;
var PubNubEvent = (function () {
    function PubNubEvent(type, channel, value) {
        this.type = type;
        this.value = value;
    }
    return PubNubEvent;
}());
exports.PubNubEvent = PubNubEvent;
var PubNubService = (function () {
    /**
     * Call this method after platform becomes to be ready
     */
    // init() {
    function PubNubService() {
        //  var PUBNUB: any;
        this.pubnub = PUBNUB({
            // Please use your own sub and pub keys below
            subscribe_key: 'sub-c-d9410dba-9635-11e6-8467-02ee2ddab7fe',
            publish_key: 'pub-c-19ad29da-ea85-4cc0-b065-73a85bdd597c',
        });
    }
    PubNubService.prototype.subscribe = function (channel) {
        var eventEmitter = new core_1.EventEmitter();
        this.pubnub.subscribe({
            channel: channel,
            message: function (message) {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.MESSAGE, channel, message));
            },
            connect: function (message) {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.CONNECT, channel, message));
            },
            disconnect: function (message) {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.DISCONNECT, channel, message));
            },
            reconnect: function (message) {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.RECONNECT, channel, message));
            },
            error: function (error) {
                eventEmitter.error(error);
            },
        });
        return eventEmitter;
    };
    PubNubService.prototype.publish = function (channel, message, store_in_history) {
        if (store_in_history === void 0) { store_in_history = true; }
        var eventEmitter = new core_1.EventEmitter();
        this.pubnub.publish({
            channel: channel,
            // The message may be any valid JSON type including objects, arrays, strings, and numbers.       
            message: message,
            // If true the messages are stored in history, default true.
            store_in_history: store_in_history,
            // Executes on a successful publish.
            callback: function (message) {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.PUBLISHED, channel, message));
            },
            // Executes on a publish error.
            error: function (error) {
                eventEmitter.error(error);
            }
        });
        return eventEmitter;
    };
    PubNubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PubNubService);
    return PubNubService;
}());
exports.PubNubService = PubNubService;
//# sourceMappingURL=pubnub.tags.notifications.service.js.map