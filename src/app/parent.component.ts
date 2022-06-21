import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <article>
      <h2>Parent</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class ParentComponent  {
  msg = "Hey there!"
  constructor() {}
}
