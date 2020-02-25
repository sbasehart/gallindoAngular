import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup;
  id = '';
  catName = '';
  catFirst = '';
  catSecond = '';
  catThird = '';
  updated: Date = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private api: CategoryService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCategory(this.route.snapshot.params.id);
    this.categoryForm = this.formBuilder.group({
      catName: [null, Validators.required],
      catFirst: [null, Validators.required],
      catSecond:[null, Validators.required],
      catThird:[null, Validators.required]
    });
  }

  getCategory(id: any) {
    this.api.getCategory(id).subscribe((data: any) => {	
      this.id = data._id;
      this.categoryForm.setValue({
        catName: data.catName,
        catFirst: data.catFirst,
        catSecond: data.catSecond,
        catThird:data.catThird
      })
    });	
  };

  onFormSubmit() {
    this.api.updateCategory(this.id, this.categoryForm.value)
      .subscribe((res: any) => {
          // const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/post/']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );

  }

  categoryDetails() {
    this.router.navigate(['/category-details/', this.id]);
  }

}