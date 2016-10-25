import {TagsModel} from './tags.model';

export class ContactModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public companyName: string;
    public position: string;
    public skype: string;
    public email: string;
    public phone: string;
    public linkedIn: string;
    public positionDetails: string;
    public tags: [TagsModel];

}