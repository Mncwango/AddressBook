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
var tags_model_1 = require('../../lib/models/tags.model');
var pubnub_tags_notifications_service_1 = require('../../services/pubnub.tags.notifications.service');
var TagsListComponent = (function () {
    function TagsListComponent(tagsService, _pubnubService) {
        this.tagsService = tagsService;
        this._pubnubService = _pubnubService;
        this.newTag = new tags_model_1.TagsModel();
        this.channel = 'Channel-cl9mz2gjo';
    }
    TagsListComponent.prototype.GetTagAllTags = function () {
        var _this = this;
        if (!this.tags) {
            this.tagsService.GetAllTags().then(function (response) {
                _this.tags = response;
            });
        }
        else {
            this.tags = null;
        }
    };
    TagsListComponent.prototype.Edit = function (tag) {
        this.editTagId = tag.id;
    };
    TagsListComponent.prototype.Update = function (tag) {
        var _this = this;
        this.editTagId = null;
        this.tagsService.UpdateTag(tag).then(function (response) {
            console.log(response);
            _this.tags = null;
        }).catch(function (error) {
            console.log(error);
        });
    };
    TagsListComponent.prototype.InsertTag = function (tagName) {
        var _this = this;
        this.newTag.name = tagName;
        this.newTag.id = 0;
        this.tagsService.AddTag(this.newTag).then(function (response) {
            console.log(response);
            _this.addNew = null;
            _this.tags = null;
        }).catch(function (error) {
            console.log(error);
        });
    };
    TagsListComponent.prototype.AddNewTag = function () {
        this.addNew = true;
    };
    TagsListComponent.prototype.DeleteTag = function (tag) {
        var _this = this;
        this.tagsService.DeleteTag(tag.id).then(function (response) {
            console.log(response);
            _this.tags = null;
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TagsListComponent.prototype, "contactTags", void 0);
    TagsListComponent = __decorate([
        core_1.Component({
            selector: 'tags-list',
            templateUrl: './app/component/tags.list/tags.list.component.html',
            providers: [tags_service_1.TagsService, pubnub_tags_notifications_service_1.PubNubService]
        }), 
        __metadata('design:paramtypes', [tags_service_1.TagsService, pubnub_tags_notifications_service_1.PubNubService])
    ], TagsListComponent);
    return TagsListComponent;
}());
exports.TagsListComponent = TagsListComponent;
//# sourceMappingURL=tags.list.component.js.map