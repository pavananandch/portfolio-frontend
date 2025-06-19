import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseURL = "http://localhost:8000/";
  // baseURL = "https://portfolio-backend-dsp9.onrender.com/";
  // baseURL = 'https://starlit-booster-463211-h3.el.r.appspot.com/';
  constructor(private http: HttpClient) {}

  getbotResponse(body: any): Observable<any> {
    return this.http.post(this.baseURL + 'api/bot', body);
  }

  awakeServer(): Observable<any> {
    return this.http.get(this.baseURL + 'api');
  }

  getVisitorsResponse(): Observable<any> {
    return this.http.get(this.baseURL + 'api/getVisitors');
  }

  postVisitorResponse(payload: any) {
    return this.http.post(this.baseURL + 'api/insert', payload);
  }
}
