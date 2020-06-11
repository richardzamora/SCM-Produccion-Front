import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MachinestateService {
    public url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url + 'MachineState';
    }

    addMachineState(machinestate): Observable<any>{
        const params = JSON.stringify(machinestate);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url, params, {headers});
    }

    getMachineStates(): Observable<any>{
        return this.http.get(this.url);
    }

    getMachineState(machinestateId): Observable<any>{
        return this.http.get(this.url + '/' + machinestateId);
    }

    updateMachineState(code, machinestate): Observable<any>{
        const params = JSON.stringify(machinestate);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + '/' + code, params, {headers});
    }

    deleteMachine(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + '/' + code, {headers});
    }
}
