import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/* import { Observable } from 'rxjs/Rx';**/
import { AternityApi } from '../models/aternity-api';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


 
@Injectable()
export class AternityService {

        private actionUrl: string;

   constructor(private http1: Http, private http: HttpClient, private _configuration: AternityApi) {
        this.actionUrl = _configuration.ServerWithApiUrl + _configuration.ApiUrl;
   }
 
  /* data: any = null;
   getAternityActivities(){
      return this.http1.get("https://eu-odata.aternity.com/aternity.odata/ALL_ACTIVITIES")
         .map((res: Response) => res.json())
         .subscribe(data => {
            this.data = data;
            console.log(this.data);
    });
   }  **/

    public getAll<T>(): Observable<T> {
        return this.http.get<T>(this.actionUrl);
    }

   /** public getSingle<T>(id: number): Observable<T> {
        return this.http.get<T>(this.actionUrl + id);
    }

    public add<T>(itemName: string): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }  **/
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}

