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
var TagsService = (function () {
    function TagsService(http) {
        this.http = http;
    }
    TagsService.prototype.GetTagsBtName = function (tagName) {
        var _this = this;
        var search = new http_1.URLSearchParams();
        search.set('tagName', tagName);
        return new Promise(function (resolve) {
            _this.http.get('/api/Tags/getTagName/', { search: search })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var response = data;
                resolve(response);
            });
        });
    };
    TagsService.prototype.GetAllTags = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('/api/Tags/getAllTags/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var response = data;
                resolve(response);
            });
        });
    };
    TagsService.prototype.DeleteTag = function (id) {
        var _this = this;
        var search = new http_1.URLSearchParams();
        search.set('id', id.toString());
        return new Promise(function (resolve) {
            _this.http.delete('/api/Tags/deleteTag', { search: search })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                var response = data;
                resolve(response);
            });
        });
    };
    TagsService.prototype.AddTag = function (tag) {
        var _this = this;
        var stringTag = JSON.stringify(tag);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('/api/Tags/addTag', stringTag, { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                var response = data;
                resolve(response);
            });
        });
    };
    TagsService.prototype.UpdateTag = function (tag) {
        var _this = this;
        var stringTag = JSON.stringify(tag);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post('/api/Tags/updateTag', stringTag, { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                var response = data;
                resolve(response);
            });
        });
    };
    TagsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TagsService);
    return TagsService;
}());
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map