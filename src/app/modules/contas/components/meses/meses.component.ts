import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubSink } from 'subsink';

import { FormBase } from 'src/app/core/utils/form-base';
import { Util } from 'src/app/core/utils/util';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.scss']
})
export class MesesComponent extends FormBase implements OnDestroy {

  public dataSource: Array<string> = new Array<string>();
  public ano: number;
  private _subs: SubSink = new SubSink();

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    private contaService: ContaService
  ) {
    super(router, activeRouter);
  }

  public getQueryParams(filterForm?: any): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();

    filterForm && (
      params.append('Ano', filterForm?.ano?.trim()),
      this.ano = filterForm.ano
    );

    return params;
  }

  public getAll(ano?: string): void {
    this._subs.sink = this.contaService.getByFilter(Util.getIdUserSession(), this.getQueryParams(ano))
      .subscribe((res) => {
      this.dataSource = res;
    });
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
