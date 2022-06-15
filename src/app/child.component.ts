import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <article>
      <h2>Child</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class ChildComponent {
  constructor() {}
}
