import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { corporateEventsSchemas } from './schemas/corporateEventsSchemas';

@Injectable()
export class DataServiceProvider {
    private _corporateEventsDataUrl = '../../../assets/mocks/sportEvents.json';

    constructor(private http: Http){}

    public getAllEventsData(){
        return this.http.get(this._corporateEventsDataUrl).map(data => data.json());
    }



}
