import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Contact } from './contact/contact';
import { Post } from './post/post'

const apiUrl = 'http://localhost:3000/api/contact/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(apiUrl)
      .pipe(
        tap(_ => this.log('fetched contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  getContact(id: any): Observable<any[]> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any[]>(url).pipe(
      tap(result => console.log(result)),
      catchError(this.handleError<any[]>(`getContact id=${id}`))
    );
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(apiUrl, contact).pipe(
      tap((prod: Contact) => console.log(`added contact w/ id=${contact.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  getContactsByPost(id: any): Observable<Contact[]> {
    return this.http.get<Contact[]>(apiUrl + 'contact/contact-details/' + id)
      .pipe(
        tap(_ => this.log('fetched Contacts')),
        catchError(this.handleError('getContacts', []))
      );
  }

  // updateContact(id: any, contact: Contact): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, contact).pipe(
  //     tap(_ => console.log(`updated contact id=${id}`)),
  //     catchError(this.handleError<any>('updateContact'))
  //   );
  // }

  deleteContact(id: any): Observable<Contact> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Contact>(url).pipe(
      tap(_ => console.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}

