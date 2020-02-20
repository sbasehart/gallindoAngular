import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../contact.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Post } from '../../post/post';
import { PostService } from '../../post.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AlertService } from '../../_alert';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;
  conName = '';
  conEmail = '';
  conPhone: '';
  conAddress1 = '';
  conAddress2 = '';
  conMessage = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  posts: Post[] = [];
  public message = "Thank you! You will now be redirected to the home page.";

  @ViewChild(ToastContainerDirective, {static: true}) toastContainer: ToastContainerDirective;

  constructor(
    private router: Router,
    private api: ContactService,
    private postService: PostService,
    private toastr: ToastrService,
    private alertService: AlertService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      conName : [null, Validators.required],
      conEmail : [null, Validators.required],
      conPhone : [null, Validators.required],
      conAddress1 : [null, Validators.required],
      conAddress2 : [null, Validators.required],
      conMessage : [null, Validators.required],
    });
  }

  public myFunc() {
    alert(this.message);
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addContact(this.contactForm.value)
      .subscribe((res: any) => {
          const id = res.id;
          this.isLoadingResults = false;
          this.alertService.success(this.message);
          setTimeout(() => {
            this.router.navigate(['/home']);
        }, 5000);  //5s
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}