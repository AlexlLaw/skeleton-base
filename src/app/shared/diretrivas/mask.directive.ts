import {
  Directive,
  ElementRef,
  Input,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDirective,
    multi: true
  }]
})
export class MaskDirective implements ControlValueAccessor {

  public onTouched: any;
  public onChange: any;

  // tslint:disable-next-line:no-input-rename
  @Input('mascara') mascara: string;

  constructor(private el: ElementRef) {}

  writeValue(obj: any): void {
    if (obj) {
      this.el.nativeElement.value = this.applyMask(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  public onKeyup($event: any): void {
    const valor: string = $event.target.value.replace(/\D/g, '');

    if ($event.keycode === 8) {
      this.onChange(valor);
      return;
    }

    const pad: string = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
    $event.target.value = this.applyMask(valor);
  }

  @HostListener('blur', ['$event'])
  public onBlur($event: any): void {
    if ($event.target.value.length === this.mascara.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  public applyMask(valor: string): string {
    valor = valor.replace(/\D/g, '');
    const pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    const valueMask = valor + pad.substring(0, pad.length - valor.length);
    let valueMaskPos = 0;

    valor = '';
    for (let i = 0; i < this.mascara.length; i ++) {
      // tslint:disable-next-line:radix
      if (isNaN(parseInt(this.mascara.charAt(i)))) {
        valor += this.mascara.charAt(i);
      } else {
        valor += valueMask[valueMaskPos++];
      }
    }

    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }
}
