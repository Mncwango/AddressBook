import {Component, Input} from '@angular/core';
import {TagsService} from '../../services/tags.service';
import {TagsModel} from '../../lib/models/tags.model';

@Component({
    selector: 'tags-search-list',
    templateUrl: './app/component/tags.search.list/tags.search.component.html',
    providers: [TagsService]
})


export class TagsSearchComponent {
    @Input()
    tagsList: [TagsModel];
    currentTag: TagsModel;

    constructor(private tagsService: TagsService)
    {
    }

    edit(tag: TagsModel) {
        this.currentTag = tag;
    }

}