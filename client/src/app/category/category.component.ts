import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from './category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
  @Input() index: number;

  data: Category[] = [];
  isLoadingResults = true;
  categories: Category[];
  subscription: Subscription

  constructor(private api: CategoryService) { }

  ngOnInit() {
    this.subscription = this.api.categoriesChanged
      .subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
    this.categories = this.api.getCategories();
  }

}