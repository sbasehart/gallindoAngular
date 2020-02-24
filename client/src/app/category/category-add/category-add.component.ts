import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { DataStorageService } from '../../interceptors/data-storage.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  id = null;
  catName = '';
  catFirst = '';
  catSecond = '';
  catThird: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: CategoryService, private formBuilder: FormBuilder, 
    // private dataStorageService: DataStorageService
    ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      catName : [null, Validators.required],
      catFirst : [null, Validators.required],      
      catSecond : [null, Validators.required],
      catThird : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCategory(this.categoryForm.value)
    this.router.navigate(['/category/']);
    // this.dataStorageService.storeCategories();
  }

}
