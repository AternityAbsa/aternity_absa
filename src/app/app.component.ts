import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AternityService } from './services/aternity-service'; 
import 'rxjs/add/operator/map'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: any = null;

 /* constructor(private _http: Http, private aternityService: AternityService) {
      this.data =aternityService.getAternityActivities();
     this.getAternityActivities(); 
  } **/

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
}
