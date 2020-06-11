import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from, Subject } from 'rxjs';
import { StateBranchOffice } from '../model/stateBranchOffice';
@Injectable({
    providedIn: 'root'
})
export class BranchofficeService {

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }
    public url: string;

    private listbranch = new Subject<string>();

    addBranchoffice(branchoffice): Observable<any>{
        const params = JSON.stringify(branchoffice);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + 'BranchOffice', params, {headers});
    }

    getBranchoffices(): Observable<any>{
        return this.http.get(this.url + 'BranchOffice');
    }

    getAllStateBranch(): Observable<StateBranchOffice[]>{
        return this.http.get<StateBranchOffice[]>(this.url + '/StateBranchOffice');
    }

    getBranchoffice(branchofficeId): Observable<any>{
        return this.http.get(this.url + 'BranchOffice/' + branchofficeId);
    }

    updateBranchoffice(code, branchoffice): Observable<any>{
        const params = JSON.stringify(branchoffice);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'BranchOffice/' + code, params, {headers});
    }

    deleteBranchoffice(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'BranchOffice/' + code, {headers});
    }

    listbranches(): Observable<string>{
        return this.listbranch.asObservable();
    }

    filter(filterBy: string){
        this.listbranch.next(filterBy);
    }
}
