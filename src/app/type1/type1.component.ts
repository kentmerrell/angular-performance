import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.css']
})
export class Type1Component implements OnInit, DoCheck {
  checkCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.checkCount ++;
    //console.log(`Type2Component checked ${Date.now()}`)
  }
}
