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

  constructor(private api: CategoryService) { }

  ngOnInit() {

    this.api.getCategories()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}