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
var ContactTagAvailable = (function () {
    function ContactTagAvailable() {
    }
    ContactTagAvailable.prototype.transform = function (contactTags, currentTag) {
        if (contactTags.length > 0 && currentTag !== null) {
            for (var _i = 0, contactTags_1 = contactTags; _i < contactTags_1.length; _i++) {
                var item = contactTags_1[_i];
                if (item.id == currentTag.id) {
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    };
    ContactTagAvailable = __decorate([
        core_1.Pipe({
            name: 'TagAvailable',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], ContactTagAvailable);
    return ContactTagAvailable;
}());
exports.ContactTagAvailable = ContactTagAvailable;
//# sourceMappingURL=contact.tags.available.pipe.js.map