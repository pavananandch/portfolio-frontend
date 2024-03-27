import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = "https://portfolio-backend-dsp9.onrender.com/";
  constructor(private http: HttpClient) { }

  getbotResponse(body: any): Observable<any> {
    return this.http
      .post(this.baseURL + 'api/bot',body);
  }

  getVisitorsResponse(): Observable<any> {
    return this.http
      .get(this.baseURL + 'api/getVisitors');
  }
}
