import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AnosEnum } from 'src/app/core/enums/anos.enum';
import { EnumMeses } from 'src/app/core/enums/meses.enum';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { FormBase } from 'src/app/core/utils/form-base';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { Util } from 'src/app/core/utils/util';
import { ContaService } from '../../services/conta.service';
import { ContasForm } from './contas-form';

@Component({
  selector: 'app-contas-form',
  templateUrl: './contas-form.component.html',
  styleUrls: ['./contas-form.component.css']
})
export class ContasFormComponent extends FormBase implements OnInit, OnDestroy {

  public redirect: string = 'meses';
  public enumAnos = new AnosEnum();
  public enumMeses = new EnumMeses();
  public idMes: number;
  private _form: ContasForm;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private contaService: ContaService
  ) {
    super(router, activeRouter);
    this._form = new ContasForm();
  }

  ngOnInit(): void {
    this.idMes = this.activatedRoute.snapshot.params.mes;
    if (this.pageId) {
      this.getById();
    }
  }

  public get contasForm(): ContasForm {
    return this._form;
  }

  public chooseMethod(): void {
    this.contasForm.markAllAsTouched();
    if (this.ano && this.mes) {
      this.contasForm.ano.setValue(this.ano);
      this.contasForm.mes.setValue(this.mes);
    }
    if (this.contasForm.valid) {
      this.pageId ? this.update() : this.create();
    }
  }

  public create(): void {
    const entity = this.contasForm.getDadosEnvioCreate();
    this.subs.sink = this.contaService.PostContas(this.idUser, entity).subscribe(() => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/usuarios']);
    });
  }

  public update(): void {
    const entity = this.contasForm.getDadosEnvioUpdate();
    entity.id = Number(this.pageId);
    this.subs.sink = this.contaService.put(Util.getIdUserSession(), entity).subscribe(() => {
      SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
      this.router.navigate(['/usuarios']);
    });
  }

  public getById(): void {
    this.contaService.getById(this.pageId).subscribe((res) => {
      this.contasForm.patchValueForm(res.body, this.contasForm);
    });
  }

  ngOnDestroy(): void {

  }
}
