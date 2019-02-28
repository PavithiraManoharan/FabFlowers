import { NewsitemFactory } from './newsitem-factory';
import { NewsitemRaw } from './newsitem-raw';
import { Newsitem } from './newsitem';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsitemService {
  private api = 'http://localhost:3000/news';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Newsitem>> {
    return this.http
      .get<NewsitemRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawNewsitems => rawNewsitems.map(rawNewsitem => NewsitemFactory.fromObject(rawNewsitem))),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
