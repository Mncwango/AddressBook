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
var ContactList = (function () {
    function ContactList() {
    }
    ContactList.prototype.showDetails = function (contact) {
        this.contactdetail = contact;
        this.contactTags = contact.tags;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ContactList.prototype, "contactsList", void 0);
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-results',
            templateUrl: '/app/component/contact.list/contact.list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactList);
    return ContactList;
}());
exports.ContactList = ContactList;
//# sourceMappingURL=contact.list.component.js.map