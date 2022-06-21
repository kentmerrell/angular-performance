import { Component } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  template: `
    <article>
      <h2>Grandchild</h2>
      <ng-content></ng-content>
    </article>
  `,
})
export class GrandchildComponent {
  msg="Sup Hommie"
  constructor() {}
}
