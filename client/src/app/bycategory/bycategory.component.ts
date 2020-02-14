import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post/post';
import { HomeService } from '../home.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryService } from '../category.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-bycategory',
  templateUrl: './bycategory.component.html',
  styleUrls: ['./bycategory.component.scss']
})
@Pipe({
  name: 'sanitizeHtml'
})
export class BycategoryComponent implements OnInit {
  posts: Post[] = [];
  isLoadingResults = true;
  data: Category[] = [];

  constructor(private route: ActivatedRoute, private api: HomeService, private sanitizer: DomSanitizer, private categoryService: CategoryService) { 
  }

  transform(v:string):SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(v);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPostsByCategory(this.route.snapshot.params.id);
    });
    this.categoryService.getCategories()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  getPostsByCategory(id: any) {
    this.posts = [];
    this.api.getPostsByCategory(id)
      .subscribe((res: any) => {
        this.posts = res;
        console.log(this.posts);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
