import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class RequeststateService {
    public url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }

    addRequestStates(requeststate): Observable<any>{
        const params = JSON.stringify(requeststate);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/RequestStatus', params, {headers});
    }

    getRequestStates(): Observable<any>{
        return this.http.get(this.url + '/RequestStatus');
    }

    getRequestState(RequestStateCode): Observable<any>{
        return this.http.get(this.url + 'RequestStatus/' + RequestStateCode);
    }



    updateRequestState(code, requeststate): Observable<any>{
        const params = JSON.stringify(requeststate);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'RequestStatus/' + code, params, {headers});
    }

    deleteRequeststate(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'RequestStatus/' + code, {headers});
    }
}
