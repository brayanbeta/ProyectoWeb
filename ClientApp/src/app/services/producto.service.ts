import { Injectable, Inject } from '@angular/core';
import { Producto } from '../Proyecto/models/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) {
  }


  post(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl + 'api/producto', producto)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Producto>('Registrar Producto', null))
    );
  }


  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl + 'api/producto').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Producto[]>('getAll', []))
    );
  }
 
  get(id: string): Observable<Producto> {
    const url = `${this.baseUrl + 'api/producto'}/${id}`;
    return this.http.get<Producto>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Producto>('Producto Service', null))
    );
  }
  update(producto: Producto): Observable<any> {
    const url = `${this.baseUrl + 'api/producto'}/${producto.codigoProducto}`;
    return this.http.put(url, producto, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del producto con id=${producto.codigoProducto}`)),
      catchError(this.handleError<any>('producto'))
    );
  }


  delete(producto: Producto | string): Observable<Producto> {
    const id = typeof producto === 'string' ? producto : producto.codigoProducto;
    const url = `${this.baseUrl + 'api/producto'}/${id}`;

    return this.http.delete<Producto>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el producto con id=${id}`)),
      catchError(this.handleError<Producto>('deleteProducto'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {

    alert(message);
  }
}
