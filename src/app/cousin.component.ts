import { Component } from '@angular/core';

@Component({
  selector: 'app-cousin',
  template: `
    <article>
      <h2>Cousin</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class CousinComponent {
  constructor() {}
}
