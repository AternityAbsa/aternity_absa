/** export class AternityApi {
    constructor(
       public id: string,
       public name: string,
       public username: string,
       public email: string,
       
       public account: string,
       public activity: string,
       public application: string
    ) {}
} **/

 import { Injectable } from '@angular/core';

@Injectable()
export class AternityApi {
    public Server = 'https://eu-odata.aternity.com/';
    public ApiUrl = 'aternity.odata/BUSINESS_ACTIVITIES_DAILY/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}