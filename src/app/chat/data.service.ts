import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getbotResponse(body: any): Observable<any> {
    return this.http
      .post('https://pavananand-portfolio.herokuapp.com/api/bot',body);
  }

  getVisitorsResponse(): Observable<any> {
    return this.http
      .get('https://pavananand-portfolio.herokuapp.com/api/getVisitors');
  }
}
