import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit {
 checkCountObj = {cnt:0}
 message = "child says hello"
  constructor() { }

  ngOnInit(): void {
  }
  // ngDoCheck(): void {
  //   const newVal = this.checkCountObj.cnt + 1
  //   this.checkCountObj = {cnt:newVal};
  //   console.log(newVal)
  // }

  updateMessage(e:any): void{
    this.message = e.target.value;
    console.log(e)
  }
}
