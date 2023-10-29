import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {  
  
  constructor(@Inject(String) private url: string, private _http : HttpClient) { }

  getAll(){
    return this._http.get(this.url)
              .pipe(
                map((response) => response as any[]),
                catchError(this.handleError)
              );
  }

  create(resource : any){
    return this._http.post(this.url, resource)
              .pipe(
                catchError(this.handleError)
              );
  }

  update(resource : any){
    return this._http.put(this.url, JSON.stringify(resource))
              .pipe(
                catchError(this.handleError)
              );
  }

  delete(id:number){
    return this._http.delete(this.url+'/'+id)
            .pipe(
              catchError(this.handleError)
            )
  }

  private handleError(error : HttpErrorResponse){
    if(error.status === 404)
      return throwError(() => new Error('Resource not found'));

    if(error.status === 400)
      return throwError(() => new Error('Bad Request'));

    return throwError( () => new Error('Unknown error occured.'));
  }
}
