import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://localhost:8889/api';
  }

  getSomeDate(): Observable<any> {
    return this.http.get<any>('${this.apiUrl}/endpoint');
  }
}
