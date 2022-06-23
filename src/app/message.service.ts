import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private parentMsgSource = new Subject<string>();
  private childMsgSource = new Subject<string>();
  private grandchildMsgSource = new Subject<string>();
  private siblingMsgSource = new Subject<string>();
  private uncleMsgSource = new Subject<string>();
  private cousinMsgSource = new Subject<string>();

  parentMsg$ = this.parentMsgSource.asObservable();
  childMsg$ = this.childMsgSource.asObservable();
  grandchildMsg$ = this.grandchildMsgSource.asObservable();
  siblingMsg$ = this.siblingMsgSource.asObservable();
  uncleMsg$ = this.uncleMsgSource.asObservable();
  cousinMsg$ = this.cousinMsgSource.asObservable();

  updateParentMsg(msg: string) {
    this.parentMsgSource.next(msg);
  }

  updateChildMsg(msg: string) {
    this.childMsgSource.next(msg);
  }

  updateGrandchildMsg(msg: string) {
    this.grandchildMsgSource.next(msg);
  }

  updateSiblingMsg(msg: string) {
    this.siblingMsgSource.next(msg);
  }
  
  updateUncleMsg(msg: string) {
    this.uncleMsgSource.next(msg);
  }
  
  updateCousinMsg(msg: string) {
    this.cousinMsgSource.next(msg);
  }

  constructor() {}
}
