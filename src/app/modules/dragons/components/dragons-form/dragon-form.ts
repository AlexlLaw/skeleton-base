import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DragonCreateDto } from 'src/app/core/dtos/dragon/dragon-create.dto';
import { DragonUpdateDto } from 'src/app/core/dtos/dragon/dragon-update.dto';

export class DragonForm extends FormGroup {
  private _errorMessages = {
    required: 'O campo %s é obrigatório.',
  };

  constructor() {
    super({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  public get id(): AbstractControl {
    return this.get('id');
  }

  public get name(): AbstractControl {
    return this.get('name');
  }

  public get type(): AbstractControl {
    return this.get('type');
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

  public getDadosEnvioCreate(): DragonCreateDto {
    return new DragonCreateDto(this.value);
  }

  public getDadosEnvioUpdate(): DragonUpdateDto {
    return new DragonUpdateDto(this.value);
  }
}
