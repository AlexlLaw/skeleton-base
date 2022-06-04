import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { FormBase } from 'src/app/core/utils/form-base';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { Util } from 'src/app/core/utils/util';
import { SubSink } from 'subsink';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-contas-mes',
  templateUrl: './contas-mes.component.html',
  styleUrls: ['./contas-mes.component.scss']
})
export class ContasMesComponent  extends FormBase implements OnInit, OnDestroy {

  public dataSource: Array<object> = new Array<object>();
  public valueTotal: number = 0;
  public redirect: string = `${this.ano}/mensal/${this.pageId}/cadastrar`;
  private _subs: SubSink = new SubSink();

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private contaService: ContaService
  ) {
    super(router, activeRouter);
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._subs.sink = this.contaService.getByMes(Util.getIdUserSession(), this.pageId)
      .subscribe((res) => {
      this.dataSource = res.body.contas;
      this.valueTotal = res.body.valorTotalMensal;
    });
  }

  public remove(item: any): void {
    SweetalertCustom.showAlertConfirmAndCancel('Atenção', 'warning', `Deseja realmente remover ${item.descricao} ?` ).then(
      (result) => {
        if (result.isConfirmed) {
          this._subs.sink = this.contaService.delete(item.id).subscribe(() => {
            SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
            this.getAll();
        });
        }
    });
  }

  public verifyTempoPagamento(tempoDePagamento: number, fixo: boolean, anoTodo?: boolean): number | string {
    if (fixo && tempoDePagamento > 0) {
      return `${tempoDePagamento}x`;
    }

    if (fixo && anoTodo) {
      return 'Dispesa essencial';
    }

    if (!fixo) {
      return 'Dispesa não essencial';
    }
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
