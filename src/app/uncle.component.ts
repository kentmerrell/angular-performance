import { Component } from '@angular/core';

@Component({
  selector: 'app-uncle',
  template: `
    <article>
      <h2>Uncle</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class UncleComponent {
  constructor() {}
}
