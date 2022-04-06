import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { DragonInfoDto } from 'src/app/core/dtos/dragon/dragon-info.dto';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { FormBase } from 'src/app/core/utils/form-base';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { DragonsService } from '../../services/dragons.service';
import { DragonForm } from './dragon-form';

@Component({
  selector: 'app-dragons-form',
  templateUrl: './dragons-form.component.html',
  styleUrls: ['./dragons-form.component.scss']
})
export class DragonsFormComponent extends FormBase implements OnInit, OnDestroy {

  private _form: DragonForm;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private dragonService: DragonsService
  ) {
    super(router, activeRouter);
    this._form = new DragonForm();
  }

  ngOnInit(): void {
    if (this.pageId) {
      this.getById();
    }
  }

  public get dragonForm(): DragonForm {
    return this._form;
  }

  public getById(): void {
    this.subs.sink = this.dragonService.getById(this.pageId)
      .pipe(map(res => new DragonInfoDto(res))).subscribe((res) => {
        this.dragonForm.patchValueForm(res, this.dragonForm);
      });
  }

  public chooseMethod(): void {
    this.dragonForm.markAllAsTouched();
    if (this.dragonForm.valid) {
      this.pageId ? this.update() : this.create();
    }
  }

  public create(): void {
    const entity = this.dragonForm.getDadosEnvioCreate();
    this.subs.sink = this.dragonService.post(entity).subscribe((res) => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/dragons']);
    });
  }

  public update(): void {
    const entity = this.dragonForm.getDadosEnvioUpdate();
    this.subs.sink = this.dragonService.put(this.pageId, entity).subscribe((res) => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/dragons']);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
