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
var http_1 = require('@angular/http');
var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
    }
    ContactsService.prototype.SearchContactBy = function (criteria) {
        var _this = this;
        var search = new http_1.URLSearchParams();
        search.set('criteria', criteria);
        return new Promise(function (resolve) {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            _this.http.get('/api/Contacts/searchBy/', { search: search })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var response = data;
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
    };
    ContactsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map