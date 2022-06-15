import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <article>
      <h2>Parent</h2>
      <ng-content></ng-content>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
