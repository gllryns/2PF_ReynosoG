import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGiveMe20]',
})
export class GiveMe20Directive {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontSize = '20px';
  }
}
