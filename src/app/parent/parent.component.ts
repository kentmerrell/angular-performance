import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  checkCount = 0;
  message = 'parent says hello';
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.checkCount = this.checkCount + 1;
    //console.log(`Type2Component checked ${Date.now()}`)
  }
}
