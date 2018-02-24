import { Component, OnInit } from '@angular/core';
declare function require(url: string);

@Component({
  selector: 'app-experience',
  templateUrl: './experience2.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  data : any;

  constructor() {
    this.data = require('./data.json');
  }
  ngOnInit() {
  }

}
