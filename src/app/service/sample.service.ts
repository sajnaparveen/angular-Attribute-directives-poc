import { Injectable } from '@angular/core';
import {catchError,Observable,throwError} from 'rxjs'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }
  count=0

handleError(error:Error){
  return throwError(error || "something went wrong")
}

  getUserDetails():Observable<any>{
    return this.http.get('http://localhost:8000/user/getuser').pipe(catchError(this.handleError))
      }
}
