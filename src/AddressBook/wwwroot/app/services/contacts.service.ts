import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import {ContactSearchModel} from '../lib/models/contact.search.model';
import {ContactModel} from '../lib/models/contact.model';
import {Constants} from '../lib/constants/constants';

@Injectable()

export class ContactsService {
    constants: Constants = new Constants();
    constructor(private http: Http) {

    }

    SearchContactBy(criteria: string) {

        var search = new URLSearchParams();

        search.set('criteria', criteria);
        return new Promise(resolve => {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            this.http.get(this.constants.ApiBaseUrl +'api/Contacts/searchBy/', { search })
                .map(res => res.json())
                .subscribe(data => {
                    var response = <Array<ContactModel>>data;
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    
                    resolve(response);
                });
        });
        //var search = new URLSearchParams();
        //search.set('firstName', searchModel.firstName);
        //search.set('lastName', searchModel.lastName);
        ////search.set('companyName', searchModel.companyName);
        ////search.set('tagName', searchModel.tagName);
        //return this.http.get('http://localhost:8217/api/Contacts/searchBy/').map((response) => {
        //    var test = <ContactModel[]>response.json();
        //    console.log(test);

        //    return test;
        //}, (error) => {
        //    console.log(error);
        //})

    }
}