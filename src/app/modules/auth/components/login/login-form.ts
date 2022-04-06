import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginDto } from 'src/app/core/dtos/login/login.dto';

export class LoginForm extends FormGroup {
  private _errorMessages = {
    required: 'O campo %s é obrigatório.',
  };

  constructor() {
    super({
      user: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public get user(): AbstractControl {
    return this.get('user');
  }

  public get password(): AbstractControl {
    return this.get('password');
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

  public getDadosEnvio(): LoginDto {
    return new LoginDto(this.value);
  }
}
