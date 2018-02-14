import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Book} from '../Classes/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {

  baseUrl: string = 'http://localhost:4567';

  constructor(private http: Http) {}

// method getBooksList
  getBooksList(): Observable<Book[]> {

/* The Map operator applies a function of your choosing to each item emitted by
 the source Observable, and returns an Observable that emits the results of these function applications. */

    const url = `${this.baseUrl}/books`;
    return this.http.get(url).map(response => response.json() as Book[]);
  }
  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
     return this.http.get(url).map( response => response.json() as Book);
  }

}
