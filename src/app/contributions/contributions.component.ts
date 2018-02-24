import { Component, OnInit } from '@angular/core';
declare function require(url: string);
@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  data : any;

  constructor() {
    this.data = require('./data.json');
  }

  ngOnInit() {
  }

}
