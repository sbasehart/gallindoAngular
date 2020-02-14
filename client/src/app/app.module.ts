import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule, 
  MatExpansionModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatContenteditableModule } from 'mat-contenteditable';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ContactAddComponent } from './contact/contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { Alert, AlertModule } from './_alert';
import { ToastrModule } from 'ngx-toastr';
import { ResumeComponent } from './resume/resume.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { sanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    CategoryComponent,
    PostComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent,
    BycategoryComponent,
    AdminComponent,
    ContactComponent,
    ContactAddComponent,
    ContactDetailsComponent,
    NotFoundComponent,
    ResumeComponent,
    sanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    CKEditorModule,
    MatContenteditableModule,
    AlertModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [ sanitizeHtmlPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
