import { Component, DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParamsService } from 'src/app/core/services/params.service';
import { RouterBase } from 'src/app/core/utils/router-base';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent extends RouterBase implements OnInit {

  constructor(public paramsService: ParamsService, public titleService: Title) {
    super(paramsService, titleService);
  }

  public onActivate(event: any) {
    console.log(this.router);
  }
}
