import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[inputDebounce]'
})
export class InputDebounceDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 500;
  @Output() callBack = new EventEmitter();
  private input = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.input.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(e =>
      this.callBack.emit(e));
  }

  ngOnDestroy() {
    if (this.subscription) {
    this.subscription.unsubscribe();
    }
  }

  // @HostListener('keydown', ['$event'])
  // keydownEvent(event) {
  //   this.input.next(event);
  // }

  @HostListener('input', ['$event'])
  clickEvent(event) {
    this.input.next(event);
  }

}
