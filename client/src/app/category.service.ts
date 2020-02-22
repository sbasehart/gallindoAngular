import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Category } from './category/category';

const apiUrl = 'https://gallindoangular.firebaseio.com/category.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesChanged = new Subject<Category[]>();

  constructor(private http: HttpClient) { }

  private categories: Category[] = [];


  setCategories(categories: Category[]) {
    this.categories = categories;
    this.categoriesChanged.next(this.categories.slice());
  }

  getCategories() {
    return this.categories.slice()
  }

  getCategory(index: number) {
      return this.categories[index]
  }

  addCategory(category: Category) {
      this.categories.push(category);
      this.categoriesChanged.next(this.categories.slice())
  }

  addCategories(categories: Category[]) {
      // for (let category of categories) {
      //   this.addCategory(category);
      // }
      this.categories.push(...categories);
      this.categoriesChanged.next(this.categories.slice());
  }

  updateCategory(index: number, newCategory: Category) {
      this.categories[index] = newCategory;
      this.categoriesChanged.next(this.categories.slice())
  }

  deleteCategory(index: number) {
      this.categories.splice(index, 1);
      this.categoriesChanged.next(this.categories.slice())
  }

  // getCategories() {
  //   return this.http
  //   .get<Category[]>(apiUrl)
  //     .pipe(
  //       map(category => {
  //         return category.map(category => {
  //           return category
  //         });
  //       }),
  //       tap(categories => {
  //         this.setCategories(categories);
  //         console.log('fetched Categories', categories)
  //       }
  //     ) 
  //   )    

  // }

  // // getCategories(): Observable<Category[]> {
  // //   return this.http.get<Category[]>(apiUrl + 'category')
  // //     .pipe(
  // //       tap(_ => this.log('fetched Categories')),
  // //       catchError(this.handleError('getCategories', []))
  // //     );
  // // }

  // getCategory(id: any): Observable<Category> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<Category>(url).pipe(
  //     tap(_ => console.log(`fetched category by id=${id}`)),
  //     catchError(this.handleError<Category>(`getCategory id=${id}`))
  //   );
  // }

  // addCategory(category: Category): Observable<Category> {
  //   return this.http.post<Category>(apiUrl, category).pipe(
  //     tap((prod: Category) => console.log(`added category w/ id=${category.id}`)),
  //     catchError(this.handleError<Category>('addCategory'))
  //   );
  // }

  // updateCategory(id: any, category: Category): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, category).pipe(
  //     tap(_ => console.log(`updated category id=${id}`)),
  //     catchError(this.handleError<any>('updateCategory'))
  //   );
  // }

  // deleteCategory(id: any): Observable<Category> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete<Category>(url).pipe(
  //     tap(_ => console.log(`deleted category id=${id}`)),
  //     catchError(this.handleError<Category>('deleteCategory'))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     console.error(error); // log to console instead
  //     this.log(`${operation} failed: ${error.message}`);

  //     return of(result as T);
  //   };
  // }

  // private log(message: string) {
  //   console.log(message);
  // }
}
