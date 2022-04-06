import { Component } from '@angular/core';
import { RouterBase } from 'src/app/core/utils/router-base';

import { DragonsFormComponent } from '../../components/dragons-form/dragons-form.component';
import { DragonsListComponent } from '../../components/dragons-list/dragons-list.component';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent extends RouterBase {

  constructor() {
    super(DragonsListComponent, DragonsFormComponent, 'Dragões', '/dragons', '/dragons/cadastrar');
  }

  public onActivate(event: any) {
    this.setParameters(event);
  }
}
