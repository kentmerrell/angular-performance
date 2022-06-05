
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-debug-change-detection',
  templateUrl: './app.debug-change-detection.component.html',
  styles: [`
        :host {
          position: absolute;
          left: 10px;
          bottom: 0;
          display: block;
        }
        .number {
          display: block;
        }
    `]
})

export class DebugChangeDetectionComponent {

  count = 0;

  constructor(private zone: NgZone) { }

  check() {
    this.zone.runOutsideAngular(() => {
    //debugger;
        setTimeout(() => this.count = this.count + 1);
    });

    return this.count;
  }
}