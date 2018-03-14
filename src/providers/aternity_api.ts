import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AternityProvider {

  /**apiUrl = 'https://jsonplaceholder.typicode.com'; **/
  apiUrl = 'https://eu-odata.aternity.com/aternity.odata'

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /**saveUser(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/lookup?id=909253').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  } **/

  getActivities() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/BUSINESS_ACTIVITIES_DAILY').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

 /* addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  } **/

  /** this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    params: new HttpParams().set('id', '3'),
  })
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  }); **/


}
