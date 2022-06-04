import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[money]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CurrencyMaskDirective,
    multi: true
  }]
})
export class CurrencyMaskDirective implements ControlValueAccessor, OnInit {

  public onTouched: any;
  public onChange: any;

  public separateDecimal: string;
  public separateThousands: string;
  public prefixed: string;

  @Input('currencyMask') mascara: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
   this.separateDecimal = this.mascara.decimal || ',';
   this.separateThousands = this.mascara.thousands || '.';
   this.prefixed = this.mascara.prefixed || '';
  }

  writeValue(obj: any): void {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  public onKeyup($event: any): any {
    return $event.target.value = this.applyMask($event.target.value)
  }

  @HostListener('blur', ['$event'])
  public onBlur($event: any): void {}

  public applyMask($event: any): string {
    var valor = parseInt($event.replace(/\D/g, ''));
    var value: string;

    value = valor.toString();
    value = value.replace(/([0-9]{2})$/g, ",$1");

    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    if(value  == 'NaN') value = '';

    this.onChange(value.replace(/\./g, ''));

    return `R$ ${value}`;
  }
}
