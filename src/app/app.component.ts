import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { BusinessService } from './services/business_area_service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: any = null;

  constructor(private _http: Http) {

  } 
}

  /** private getAternityActivities() {
    return this._http.get('https://eu-odata.aternity.com/aternity.odata/ALL_ACTIVITIES')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data;
                        console.log(this.data);
                });
  } **/


   /* constructor() {
    }
    ngOnInit() {
    } **/
