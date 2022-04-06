import { Component, OnDestroy, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

import { DragonsListDto } from 'src/app/core/dtos/dragon/dragons-list.dto';
import { DragonsService } from 'src/app/modules/dragons/services/dragons.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit, OnDestroy {

  public dataSource: number = 0;
  private _subs = new SubSink();

  constructor(private dragonsService: DragonsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this._subs.sink = this.dragonsService.get()
    .pipe(map(res => res.map((dragon: any) => new DragonsListDto(dragon))))
    .subscribe((res) => {
      this.dataSource = res.length;
    });
  }


  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
