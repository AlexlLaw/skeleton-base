import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ParamsService } from 'src/app/core/services/params.service';
import { RouterBase } from 'src/app/core/utils/router-base';


@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent extends RouterBase implements OnInit {

  constructor(public paramsService: ParamsService, public titleService: Title) {
    super(paramsService, titleService);
  }

  public onActivate(event: any): void {
    this.setRoutersAndNameScreeCustom(event);
  }
}
