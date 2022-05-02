import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBase } from 'src/app/core/utils/form-base';
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
    console.log(Util.getIdUserSession());
    this._subs.sink = this.contaService.getByMes(Util.getIdUserSession(), this.pageId)
      .subscribe((res) => {
      this.dataSource = res.body.result;
      this.valueTotal = res.body.valorTotalMensal;
    });
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
