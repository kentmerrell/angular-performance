import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-sibling',
  template: `
    <article>
      <h2>Sibling</h2>
      <div><input #inpt (change)="updateMsg(inpt.value)"/></div>
      <div>Change Detection: <span class="value">OnPush</span></div>
      <div>Last binding: <span class="value">{{ time }}</span></div>
      <div>Parent: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <div>Child: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <div>Grandchild: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <div>Sibling: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <div>Uncle: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <div>Cousin: <span class="value">'{{childMessage || ' '}}'</span> (property getter)</div>
      <ng-content></ng-content>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SiblingComponent implements DoCheck, OnInit {
  private parentMsg: string = '';
  private childMsg: string = '';
  private grandchildMsg: string = '';
  private siblingMsg: string = '';
  private uncleMsg: string = '';
  private cousinMsg: string = '';
  public get time() {
    const time = new Date().toLocaleTimeString('en-US',{hour:'numeric', minute:'2-digit', second:'2-digit', hour12:true})
    console.log(time);
    return time;
  }
  public get childMessage(){
    return this.childMsg
  }

  updateMsg(msg: string) {
    console.log(msg);
    this.messageService.updateSiblingMsg(msg)
  }
  constructor(public messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.childMsg$.subscribe((m) => {
      this.childMsg = m;
    });
  }
  ngDoCheck(): void {
    console.log('Sibling - DoCheck');
  }
}
