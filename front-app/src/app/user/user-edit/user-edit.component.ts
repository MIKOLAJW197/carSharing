import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
      if(window.confirm('Are sure you want to delete this item ?')){
        //put your delete method logic here
        // this.apiservice.delete
      }
  }

}
