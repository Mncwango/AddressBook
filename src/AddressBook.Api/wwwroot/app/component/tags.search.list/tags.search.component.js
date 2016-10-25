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
var tags_service_1 = require('../../services/tags.service');
var TagsSearchComponent = (function () {
    function TagsSearchComponent(tagsService) {
        this.tagsService = tagsService;
    }
    TagsSearchComponent.prototype.edit = function (tag) {
        this.currentTag = tag;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagsSearchComponent.prototype, "tagsList", void 0);
    TagsSearchComponent = __decorate([
        core_1.Component({
            selector: 'tags-search-list',
            templateUrl: './app/component/tags.search.list/tags.search.component.html',
            providers: [tags_service_1.TagsService]
        }), 
        __metadata('design:paramtypes', [tags_service_1.TagsService])
    ], TagsSearchComponent);
    return TagsSearchComponent;
}());
exports.TagsSearchComponent = TagsSearchComponent;
//# sourceMappingURL=tags.search.component.js.map