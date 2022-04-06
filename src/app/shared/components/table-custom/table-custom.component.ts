import { Component, ContentChild, Input, OnInit, SimpleChanges, TemplateRef, OnChanges } from '@angular/core';
import { TableBodyDirective } from './config/table-body.directive';
import { TableEmptyDirective } from './config/table-empty.directive';
import { TableHeaderDirective } from './config/table-header.directive';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss']
})
export class TableCustomComponent implements OnInit {

  @ContentChild(TableHeaderDirective, { static: true, read: TemplateRef }) appTableHeader;
  @ContentChild(TableBodyDirective, { static: true, read: TemplateRef }) appTableBody;
  @ContentChild(TableEmptyDirective, { static: true, read: TemplateRef }) appTableEmpty;

  @Input() items = new Array();
  @Input() itemsPerPage = 10;
  @Input() paginator = true;
  @Input() classPaginator = 'bcg-navy';
  public page: number = 1;
  public itemPerPage: number = 10;
  public pageCurrent = 1;

  constructor() { }

  ngOnInit() {
    if (!this.items) {
      this.items = [];
    }
  }

 public setCurrentPage(page): void {
    this.pageCurrent = page;
  }
}
