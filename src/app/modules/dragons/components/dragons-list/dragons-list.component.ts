import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { SubSink } from 'subsink';

import { DragonsListDto } from 'src/app/core/dtos/dragon/dragons-list.dto';
import { DragonsService } from '../../services/dragons.service';
import { SweetalertCustom } from 'src/app/core/utils/sweetalert-custom';
import { MSG_SUCCES } from 'src/app/core/utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.scss']
})
export class DragonsListComponent implements OnInit, OnDestroy {

  public dataSource: Array<DragonsListDto> = new Array<DragonsListDto>();
  private _subs = new SubSink();

  constructor(
    public router: Router,
    private dragonsService: DragonsService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._subs.sink = this.dragonsService.get()
    .pipe(map(res => res.map((dragon: any) => new DragonsListDto(dragon))))
    .subscribe((res) => {
      this.dataSource = res.sort((a, b ) => {
        return a.name.localeCompare(b.name);
      });
    });
  }

  public delete(item): void {
    SweetalertCustom.showAlertConfirmAndCancel('Atenção', 'warning', `Deseja realmente remover ${item.name} ?` ).then(
      (result) => {
        if (result.isConfirmed) {
          this._subs.sink = this.dragonsService.delete(item.id).subscribe(() => {
          SweetalertCustom.showAlertTimer2('success', MSG_SUCCES);
          this.getAll();
        });
        }
    });
  }

  public redirectUpdate(item): Promise<boolean> {
    return this.router.navigate([`dragons/editar/${item.id}`]);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
