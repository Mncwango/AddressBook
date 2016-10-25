import {Injectable, EventEmitter} from '@angular/core';

type OnMessageFn = (message, envelope, channelOrGroup, time, channel) => void;

export enum PubNubEventType {
    MESSAGE,
    CONNECT,
    DISCONNECT,
    RECONNECT,
    PUBLISHED,
    HISTORY
}

export class PubNubEvent {
    constructor(public type: PubNubEventType, channel: string, public value: any) { }
}

@Injectable()
export class PubNubService {

    pubnub: any;


    /**
     * Call this method after platform becomes to be ready
     */
    // init() {
    constructor() {
     //  var PUBNUB: any;
        this.pubnub = PUBNUB({
            // Please use your own sub and pub keys below
            subscribe_key: 'sub-c-d9410dba-9635-11e6-8467-02ee2ddab7fe',
            publish_key: 'pub-c-19ad29da-ea85-4cc0-b065-73a85bdd597c',
            //ssl: true
        });
    }

    subscribe(channel: string): EventEmitter<PubNubEvent> {
        let eventEmitter: EventEmitter<PubNubEvent> = new EventEmitter<PubNubEvent>();
        this.pubnub.subscribe({
            channel: channel,
            message: (message) => {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.MESSAGE, channel, message));
            },
            connect: (message) => {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.CONNECT, channel, message));
            },
            disconnect: (message) => {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.DISCONNECT, channel, message));
            },
            reconnect: (message) => {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.RECONNECT, channel, message));
            },
            error: (error) => {
                eventEmitter.error(error);
            },
        });
        return eventEmitter;
    }

    publish(channel: string, message: any, store_in_history: boolean = true): EventEmitter<PubNubEvent> {
        let eventEmitter: EventEmitter<PubNubEvent> = new EventEmitter<PubNubEvent>();
        this.pubnub.publish({
            channel: channel,
            // The message may be any valid JSON type including objects, arrays, strings, and numbers.       
            message: message,
            // If true the messages are stored in history, default true.
            store_in_history: store_in_history,
            // Executes on a successful publish.
            callback: (message) => {
                eventEmitter.emit(new PubNubEvent(PubNubEventType.PUBLISHED, channel, message));
            },
            // Executes on a publish error.
            error: (error) => {
                eventEmitter.error(error);
            }
        });
        return eventEmitter;
    }

    //history(channel: string, count: number = 100, start: number = null, end: number = null, reverse: boolean = true, include_token: boolean = true): EventEmitter<PubNubEvent> {
    //    let eventEmitter: EventEmitter<PubNubEvent> = new EventEmitter<PubNubEvent>();
    //    this.pubnub.history({
    //        channel: channel,
    //        callback: (messages) => {
    //            eventEmitter.emit(new PubNubEvent(PubNubEventType.HISTORY, channel, messages));
    //        },
    //        error: (error) => {
    //            eventEmitter.error(error);
    //        },
    //        count: count,
    //        start: start,
    //        end: end,
    //        reverse: reverse,
    //        include_token: include_token
    //    });
    //    return eventEmitter;
    //}
}