import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  @Input() public dataSource: Array<object> = new Array<object>();
  @Output() public update: EventEmitter<object> = new EventEmitter<object>();
  @Output() public delete: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  public actionUpdate(item?: object): void {
    this.update.emit(item);
  }

  public actionDelete(item?: object): void {
    this.delete.emit(item);
  }

}
