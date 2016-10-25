import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import {TagsModel} from '../lib/models/tags.model';
import {Constants} from '../lib/constants/constants';

@Injectable()

export class TagsService {
    constants: Constants = new Constants();
    constructor(private http: Http) {

    }

    GetTagsBtName(tagName: string) {
        var search = new URLSearchParams();
        search.set('tagName', tagName);
        return new Promise(resolve => {
            this.http.get(this.constants.ApiBaseUrl+'api/Tags/getTagName/', { search })
                .map(res => res.json())
                .subscribe(data => {
                    var response = <Array<TagsModel>>data;
                    resolve(response);
                });
        });


    }

    GetAllTags() {
        return new Promise(resolve => {
            this.http.get(this.constants.ApiBaseUrl +'api/Tags/getAllTags/')
                .map(res => res.json())
                .subscribe(data => {
                    var response = <Array<TagsModel>>data;
                    resolve(response);
                });
        });


    }

    DeleteTag(id: number) {
        var search = new URLSearchParams();
        search.set('id', id.toString());
        return new Promise(resolve => {
            this.http.delete(this.constants.ApiBaseUrl +'api/Tags/deleteTag', { search })
                .map(res => res.json()).subscribe(data => {
                    var response = data;
                    resolve(response);
                });


        });
    }

    AddTag(tag: TagsModel) {

        var stringTag = JSON.stringify(tag);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(resolve => {
            this.http.post(this.constants.ApiBaseUrl +'api/Tags/addTag', stringTag, { headers: headers })
                .map(res => res.json()).subscribe(data => {
                    var response = data;
                    resolve(response);
                });


        });
    }

    UpdateTag(tag: TagsModel) {
        var stringTag = JSON.stringify(tag);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(resolve => {
            this.http.post(this.constants.ApiBaseUrl +'api/Tags/updateTag', stringTag, { headers: headers })
                .map(res => res.json()).subscribe(data => {
                    var response = data;
                    resolve(response);
                });


        });

    }


}