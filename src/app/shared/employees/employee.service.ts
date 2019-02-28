import { EmployeeFactory } from './employee-factory';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeRaw } from './employee-raw';
import { Employee } from './employee';
import { retry, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Employee>> {
    return this.http
      .get<EmployeeRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawEmployees => rawEmployees.map(rawEmployee => EmployeeFactory.fromObject(rawEmployee))),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
