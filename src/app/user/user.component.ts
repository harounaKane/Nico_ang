import { DateService } from './../date.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  })

  dateService: DateService;

  constructor(dateService: DateService ) { 
    this.dateService = dateService;
  }

  ngOnInit(): void {
  }

  showForm(){
    console.log(this.userForm);
  }

}
