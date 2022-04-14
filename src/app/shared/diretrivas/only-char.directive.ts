import { Directive, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appOnlyChar]'
})
export class OnlyCharDirective {
  constructor(private el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('keypress',  ['$event']) onKeyPress(event: KeyboardEvent) {
    return (event.charCode > 8 && event.charCode < 10) ||

     (event.charCode > 64 && event.charCode < 91) ||

    (event.charCode > 96 && event.charCode < 123) ||

    (event.charCode > 191 && event.charCode >= 255);
  }
}
