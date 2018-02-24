import { Component, OnInit } from '@angular/core';
declare function require(url: string);

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  data : any;

  constructor() {
    this.data = require('./data.json');
  }

  ngOnInit() {
  }

}
