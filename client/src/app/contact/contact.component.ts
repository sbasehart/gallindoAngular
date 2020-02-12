import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // displayedColumns: string[] = ['appName', 'updated'];
  data: Contact[] = [];
  isLoadingResults = true;

  constructor(private api: ContactService) { }

  ngOnInit() {
    this.api.getContacts()
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