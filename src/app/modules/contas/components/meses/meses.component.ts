import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/core/utils/util';

import { SubSink } from 'subsink';

import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.scss']
})
export class MesesComponent implements OnInit, OnDestroy {

  public dataSource: Array<string> = new Array<string>();
  private _subs: SubSink = new SubSink();

  constructor(
    public router: Router,
    private contaService: ContaService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getQueryParams(filterForm?: any): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    console.log(filterForm);

    filterForm && (
      params.append('Ano', filterForm?.ano?.trim())
    );

    return params;
  }

  public getAll(ano?: string): void {
    this._subs.sink = this.contaService.getByFilter(Util.getIdUserSession(), this.getQueryParams(ano))
      .subscribe((res) => {
      this.dataSource = res;
    });
  }

  public redirectUpdate(item): Promise<boolean> {
    return this.router.navigate([`dragons/editar/${item.id}`]);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
