import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling',
  template: `
    <article>
      <h2>Sibling</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class SiblingComponent {
  msg="Waddup Brah?"
  constructor() {}
}
