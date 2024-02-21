import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8889'; 

  constructor(private http: HttpClient) {}

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/employees/create`, employeeData);
  }
}