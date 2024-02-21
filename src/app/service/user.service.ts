import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8889';

  constructor(private http: HttpClient) { }

  getUserRole(): Observable<string> {
    return this.http.get<string>('${this.apiUrl}/user/role');
  }
}
