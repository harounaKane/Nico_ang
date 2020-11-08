import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: string = "Harouna";
  elements = [1, 2, 3, 4, 5];
  color = true;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  //fonction click
  userClick(){
    console.log("clicked");
    
  }

}
