import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { ContasCreateDto } from 'src/app/core/dtos/contas/contas-create.dto';
import { ContasUpdateDto } from 'src/app/core/dtos/contas/contas-update.dto';

export class ContasForm extends FormGroup {
  private _errorMessages = {
    required: 'O campo %s é obrigatório.',
  };

  constructor() {
    super({
      id: new FormControl(null),
      ano: new FormControl(null, [Validators.required]),
      mes: new FormControl(null, [Validators.required] ),
      descricao: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required]),
      fixo: new FormControl(false),
      pago: new FormControl(false),
    });
  }

  public get id(): AbstractControl {
    return this.get('id');
  }

  public get ano(): AbstractControl {
    return this.get('ano');
  }

  public get mes(): AbstractControl {
    return this.get('mes');
  }

  public get descricao(): AbstractControl {
    return this.get('descricao');
  }

  public get valor(): AbstractControl {
    return this.get('valor');
  }

  public get fixo(): AbstractControl {
    return this.get('fixo');
  }

  public get pago(): AbstractControl {
    return this.get('pago');
  }

  public markAllAsTouched(): void {
    Object.keys(this.controls).map((control) =>
      this.get(control).markAsDirty()
    );
  }

  public getFirstErrorFrom(controlName: string, label: string): string {
    return this._errorMessages[
      Object.keys(this.get(controlName).errors)[0]
    ].replace('%s', label || controlName);
  }

  public patchValueForm(obj: any, formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      if (obj[key]) {
        formGroup.controls[key].patchValue(obj[key]);
      }
    });
  }

  public getDadosEnvioCreate(): ContasCreateDto {
    return new ContasCreateDto(this.value);
  }

  public getDadosEnvioUpdate(): ContasUpdateDto {
    return new ContasUpdateDto(this.value);
  }
}
