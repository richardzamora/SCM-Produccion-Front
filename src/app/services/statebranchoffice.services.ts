import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class StateBranchOfficeService {
    public url: string;
    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }

    addStateBranchOffice(statebranchOffice): Observable<any>{
        const params = JSON.stringify(statebranchOffice);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/StateBranchOffice', params, {headers});
    }

    getStatesBranchOffice(): Observable<any>{
        return this.http.get(this.url + '/StateBranchOffice');
    }

    getStateBranchOffice(StateBranchOfficeCode): Observable<any>{
        return this.http.get(this.url + 'StateBranchOffice/' + StateBranchOfficeCode);
    }

    updateStateBranchOffice(code, requeststate): Observable<any>{
        const params = JSON.stringify(requeststate);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'StateBranchOffice/' + code, params, {headers});
    }

    deleteStateBranchOffice(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'StateBranchOffice/' + code, {headers});
    }
}
