import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { UsuarioInfoDto } from 'src/app/core/dtos/usuarios/usuario-info-dto';
import { EnumRestriction } from 'src/app/core/enums/restriction.enum';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { FormBase } from 'src/app/core/utils/form-base';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { UsuarioForm } from './usuario-form';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends FormBase implements OnInit, OnDestroy {

  public enumRestriction = new EnumRestriction();
  private _form: UsuarioForm;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    super(router, activeRouter);
    this._form = new UsuarioForm();
  }

  ngOnInit(): void {
    if (this.pageId) {
      this.getById();
    }
  }

  public get usuarioForm(): UsuarioForm {
    return this._form;
  }

  public getById(): void {
    this.subs.sink = this.usuarioService.getById(this.pageId)
      .pipe(map(res => new UsuarioInfoDto(res.body))).subscribe((res) => {
        this.usuarioForm.patchValueForm(res, this.usuarioForm);
      });
  }

  public chooseMethod(): void {
    this.usuarioForm.markAllAsTouched();
    if (this.usuarioForm.valid) {
      this.pageId ? this.update() : this.create();
    }
  }

  public create(): void {
    const entity = this.usuarioForm.getDadosEnvioCreate();
    this.subs.sink = this.usuarioService.post(entity).subscribe(() => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/usuarios']);
    });
  }

  public update(): void {
    const entity = this.usuarioForm.getDadosEnvioUpdate();
    this.subs.sink = this.usuarioService.put(this.pageId, entity).subscribe(() => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/usuarios']);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
