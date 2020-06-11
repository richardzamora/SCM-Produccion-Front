import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url + 'Process';
  }

  getProcesses(): Observable<any> {
    return this.http.get(this.url);
  }

  getProcess(processId): Observable<any> {
    return  this.http.get(this.url + '/' + processId);
  }

  addProcess(process): Observable<any> {
    const params = JSON.stringify(process);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url , params, {headers: headers});
  }

  deleteProcess(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + '/' + code, {headers: headers});
  }

  updateProcess(code): Observable<any>{
    const params = JSON.stringify(process);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + code, params, {headers});
  }
}
