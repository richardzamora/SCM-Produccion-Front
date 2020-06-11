import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';

import { Observable, from, Subject } from 'rxjs';
import { Requeststate } from '../model/requeststatus';
import { RequestAnalysisPK } from '../model/requestanalysis';
import { Productions } from '../model/productions';

@Injectable({
    providedIn: 'root'
})
export class RequestbatchesService {
    public url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }

    private listbatches = new Subject<string>();

    addRequestbatches(requestbatch): Observable<any>{
        const params = JSON.stringify(requestbatch);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.url + '/RequestBatches', params, {headers});

    }

    getRequestbatches(): Observable<any>{
        return this.http.get(this.url + '/RequestBatches');
    }

    getAllrequeststate(): Observable<Requeststate[]>{
        return this.http.get<Requeststate[]>(this.url + '/RequestStatus');
    }

    getAllProductions(): Observable<Productions[]>{
        return this.http.get<Productions[]>(this.url + '/Production');
    }

    getAllrequestpk(): Observable<RequestAnalysisPK[]>{
        return this.http.get<RequestAnalysisPK[]>(this.url + '/RequestAnalysis');
    }

    getRequestbatch(requestbatchId): Observable<any>{
        return this.http.get(this.url + 'RequestBatches/' + requestbatchId);
    }

    updateRequestbatch(code, requestbatch): Observable<any>{
        const params = JSON.stringify(requestbatch);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'RequestBatches/' + code, params, {headers});

    }

    deleteRequestbatch(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.delete(this.url + 'RequestBatches/' + code, {headers});
    }

    listabatches(): Observable<string>{
        return this.listbatches.asObservable();
    }

    filter(filterBy: string){
        this.listbatches.next(filterBy);

    }
}
