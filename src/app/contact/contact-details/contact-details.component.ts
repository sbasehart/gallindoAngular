import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = {
    id: null,
    conName: '',
    conPhone: '',
    conEmail: '',
    conAddress1: '',
    conAddress2: '',
    conMessage: '',
    updated: null
  };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ContactService, private router: Router) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params.id);
  }

  getContactDetails(id: any) {
    this.api.getContact(id)
      .subscribe((data: any) => {
        this.contact = data;
        console.log(this.contact);
        this.isLoadingResults = false;
      });
  }


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

}