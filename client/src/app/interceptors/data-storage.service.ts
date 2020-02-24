// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { map, tap, take, exhaustMap } from 'rxjs/operators';

// import { Post } from '../post/post';
// import { AuthService } from '../auth.service';
// import { Category } from '../category/category';
// import { PostService } from '../post.service';
// import { CategoryService } from '../category.service';

// @Injectable({ providedIn: 'root' })
// export class DataStorageService {


//   constructor(
//     private http: HttpClient,
//     private postService: PostService,
//     private authService: AuthService,
//     private categoryService: CategoryService
//   ) { }

//   storePosts() {
//     const posts = this.postService.getPosts();
//     this.http
//       .put(
//         'https://postproject-acd26.firebaseio.com/posts.json',
//         posts
//       )
//       .subscribe(response => {
//         console.log(response);
//       });
//   }

//   storeCategories() {
//     const categories = this.categoryService.getCategories();
//     this.http
//       .put(
//         'https://gallindoangular.firebaseio.com/category.json',
//         categories
//       )
//       .subscribe(response => {
//         console.log(response);
//       });
//   }

//   fetchPosts() {
//     return this.http
//       .get<Post[]>(
//         'https://gallindoangularfirebaseio.com/posts.json'
//       )
//       .pipe(
//         map(posts => {
//           return posts.map(post => {
//             return post
//           });
//         }),
//         tap(posts => {
//           this.postService.setPosts(posts);
//           console.log(posts)
//         })
//       );
//   }

//   fetchCategories() {
//     return this.http
//       .get<Category[]>(
//         'https://gallindoangular.firebaseio.com/category.json'
//       )
//       .pipe(
//         map(categories => {
//           return categories.map(category => {
//             return category
//           });
//         }),
//         tap(categories => {
//           this.categoryService.setCategories(categories)
//           console.log(categories)
//           console.error();
//         })
//       );
//   }
// }

