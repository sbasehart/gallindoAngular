import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../contact.service';
import { Contact } from '../contact';
import { PostService } from '../../post.service';
import { Post } from '../../post/post';

@Component({
  selector: 'con-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = {
    id: null,
    conPhone: '',
    conEmail: '',
    conName: '',
    conAddress1: '',
    conAddress2: '',
    conMessage: '',
    updated: null
  };
  isLoadingResults = true;
  post: Post = null;

  constructor(private route: ActivatedRoute, private api: ContactService, private router: Router, private postApi: PostService) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params.id);
  }

  getContactDetails(id: any) {
    this.api.getContact(id)
      .subscribe((con: any) => {
        var conl = con[0];
        this.contact = conl;
        this.contact.id = conl._id;
        this.post = con[1];
        console.log(this.post, this.contact);
        this.isLoadingResults = false;
      });
  }

  // getContactsByPost(id: any) {
  //   this.post = [];
  //   var x = this.contact.post;
  //   this.api.getContactsByPost(x)
  //     .subscribe((res: any) => {
  //       this.post = res;
  //       console.log(this.post);
  //       this.isLoadingResults = false;
  //     }, err => {
  //       console.log(err);
  //       this.isLoadingResults = false;
  //     });
  // }

  deleteContact(id: any) {
    this.isLoadingResults = true;
    this.api.deleteContact(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/contact']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

  // getPostDetails(id: any) {
  //   this.postApi.getPost(Post)
  //     .subscribe((data: any) => {
  //       this.post = data;
  //       this.post.id = data._id;
  //       console.log(this.post);
  //       this.isLoadingResults = false;
  //     });
  // }

  // getPost() {
  //   var x = this.contact.post
  //   this.postApi.getPost(x)
  //     .subscribe((res: any) => {
  //       this.post = res;
  //       console.log(this.post);
  //       this.isLoadingResults = false;
  //     }, err => {
  //       console.log(err);
  //       this.isLoadingResults = false;
  //     });
  // }

}