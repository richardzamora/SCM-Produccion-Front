import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, Subject, from } from 'rxjs';
import { Requeststate  } from '../model/requeststatus';
import { RequestAnalysisPK } from '../model/requestanalysis';
@Injectable({
    providedIn: 'root'
})

export class RequestanalysisService {
    public url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }


    private listrequestanalysis = new Subject<string>();

    addRequestanalysis(requestanalysis): Observable<any>{
        const requestAnalysisPK = new RequestAnalysisPK(requestanalysis);
        const params = JSON.stringify(requestAnalysisPK);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/RequestAnalysis', params, {headers});
    }
    getRequestStates(): Observable<any>{
        return this.http.get(this.url + '/RequestStatus');
    }
    getRequestanalysis(): Observable<any>{
        return this.http.get(this.url + '/RequestAnalysis');
    }

    getAllRequeststates(): Observable<Requeststate[]>{
        return this.http.get<Requeststate[]>(this.url + '/RequestStatus');
    }

    getRequestanalyse(RequestAnalysisCode): Observable<any>{
        return this.http.get(this.url + 'RequestAnalysis/' + RequestAnalysisCode);
    }

    updateRequestanalysis(code, requestanalysis): Observable<any>{
        const params = JSON.stringify(requestanalysis);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'RequestAnalysis/' + code, params, {headers});
    }

    deleteRequestanalysis(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'RequestAnalysis/' + code, {headers});
    }

    lisrequestanalysis(): Observable<string>{
        return this.listrequestanalysis.asObservable();
    }

    filter(filterBy: string){
        this.listrequestanalysis.next(filterBy);
    }
}
