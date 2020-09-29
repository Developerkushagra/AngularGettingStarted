import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
          .pipe(
            tap(data => console.log('All: ' +
            JSON.stringify(data))),
            catchError(this.handleError)
          );
      }

      getproduct(id: number): Observable<IProduct> {
        return this.getProduct()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
      }
    // tslint:disable-next-line: typedef
    private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    }

}
