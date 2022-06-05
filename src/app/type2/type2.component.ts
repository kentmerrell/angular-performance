import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-type2',
  templateUrl: './type2.component.html',
  styleUrls: ['./type2.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Type2Component implements OnInit, DoCheck {
 checkCount = 0
 message = "hello"
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.checkCount ++;
    //console.log(`Type2Component checked ${Date.now()}`)
  }

  updateMessage(e:any): void{
    this.message = e.target.value;
    console.log(e)
  }
}
