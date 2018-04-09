import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Http, Headers, Response,RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import * as models from '../models/models';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/Rx';
import { BlueprismModel } from '../models/models';


@Injectable()
export class DataLoadService {


    protected basePath = "/odata/aternity.odata";

    public applications: Array<BlueprismModel>;
    public blueprism : models.BlueprismModel[];
    public blueprismRobots: Array<models.BlueprismModel>;
    public defaultHeaders: Headers = new Headers();

    private data: any[];
    private x : number;

    constructor(private http: Http) {}

    /**
     * get Blueprism 
     *
     * @param body Blueprism to add
     */

     loadRobotstoArray(): any {
        
     this.data = this.ApiCall();
     console.log(this.data);
     }

     ApiCall(): any {
        /*return this.http.get(this.basePath+'/HOST_RESOURCES_HOURLY?$filter=(SERVING_DEVICE_TYPE%20eq%20%27Virtual%20App%20Server%27)&relative_time(last_48_hours)')**/
        return this.http.get(this.basePath+'/HOST_RESOURCES_HOURLY?$filter=(SERVING_DEVICE_TYPE%20eq%20%27Virtual%20App%20Server%27)&$top=5')
        .map(res => {
            this.data = res.json();      
            console.log(this.data);
        })
     }



      /**
     * Add a new Applications
     *
     * @param body Application to add
     */
    public addApplicationsWithHttpInfo(body: models.BlueprismModel, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/HOST_RESOURCES_HOURLY';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); 
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addApplications.');
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body, 
            search: queryParameters
        });
 
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    }

    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1, T2>(objA: T1, objB: T2) {
        for (let key in objB){
            if (objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    private extractData(res: Response) {
        let body = res.json() as models.BlueprismModel[];
        console.log(body); 
        return body || { }; 
        
      }

        private handleError(error: Response){

        return Observable.throw (error.statusText);
      }
}