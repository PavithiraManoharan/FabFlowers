import { ProductRaw } from './product-raw';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';
import { ProductFactory } from './product-factory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = 'http://localhost:3000/produkte';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Product>> {
    return this.http
      .get<ProductRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawProducts => rawProducts.map(rawProduct => ProductFactory.fromObject(rawProduct))),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: string): Observable<Product> {
    return this.http
      .get<ProductRaw>(`${this.api}/${id}`)
      .pipe(
        retry(3),
        map(rawProduct => ProductFactory.fromObject(rawProduct)),
        catchError(this.errorHandler)
      );
  }

  getFeatured(): Observable<Array<Product>> {
    return this.http
      .get<ProductRaw[]>(`${this.api}`)
      .pipe(
        retry(3),
        map(rawProducts =>
            rawProducts.filter(rawProduct => rawProduct.featured)
            .map(rawProduct => ProductFactory.fromObject(rawProduct))),
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

  create(product: Product): Observable<any> {
    return this.http
      .post(`${this.api}`, product, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(product: Product): Observable<any> {
    return this.http
      .put(`${this.api}/${product.id}`, product, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}
