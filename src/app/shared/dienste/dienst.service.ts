import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dienst } from './dienst';
import { DienstRaw } from './dienst-raw';
import { retry, map, catchError } from 'rxjs/operators';
import { DienstFactory } from './dienst-factory';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DienstService {
  private api = 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Dienst>> {
    return this.http
      .get<DienstRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawDienste => rawDienste.map(rawDienst => DienstFactory.fromObject(rawDienst))),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: string): Observable<Dienst> {
    return this.http
      .get<DienstRaw>(`${this.api}/${id}`)
      .pipe(
        retry(3),
        map(rawDienst => DienstFactory.fromObject(rawDienst)),
        catchError(this.errorHandler)
      );
  }


  getFeatured(): Observable<Array<Dienst>> {
    return this.http
      .get<DienstRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawDienste =>
          rawDienste.filter(rawDienst => rawDienst.featured)
            .map(rawDienst => DienstFactory.fromObject(rawDienst))),
        catchError(this.errorHandler)
      );
  }

  remove(id: string): Observable<any> {
    return this.http
      .delete(`${this.api}/${id}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(dienst: Dienst): Observable<any> {
    return this.http
      .post(`${this.api}`, dienst, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(dienst: Dienst): Observable<any> {
    return this.http
      .put(`${this.api}/${dienst.id}`, dienst, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
