import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './category/category';
import { HomeService } from './home.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.min.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  categories: Category[] = [];
  loginStatus = false;
  opened: boolean;
  mybool:boolean;
  mybooltwo:boolean;

  constructor(private api: HomeService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status: any) => {
      console.log(status);
      if (status === true) {
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
      }
    });
    this.api.getCategories()
      .subscribe((res: any) => {
        this.categories = res;
        console.log(this.categories);
      }, err => {
        console.log(err);
    });
    this.showDiv();
  }

  showDiv(){
    if (this.router.url === '/') {
      this.mybool=false;
    } else { 
      this.mybool=true;
    }
  }
  
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  logout() {
    this.authService.logout()
      .subscribe((res: any) => {
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
  }
}
