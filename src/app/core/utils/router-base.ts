import { DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParamsService } from '../services/params.service';

export class RouterBase implements OnInit, DoCheck {

  public title: string;
  public subtitle: string;
  public router: string;
  public nameScreen: string;

  constructor(public paramsService: ParamsService, public titleService?: Title) {}

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
    this.subtitle = this.paramsService.getSubtitle;
    this.routers();
  }

  ngDoCheck(): void {
    this.title = this.titleService.getTitle();
    this.subtitle = this.paramsService.getSubtitle;
    this.routers();
  }

  public routers(): void {
    this.subtitle === 'Listar' && (
      this.router = 'cadastrar',
      this.nameScreen = 'Adicionar'
    );

    this.subtitle === 'Cadastrar' && (
      this.router = 'listar',
      this.nameScreen = 'Filtrar'
    );

    this.subtitle === 'Editar' && (
      this.router = 'listar',
      this.nameScreen = 'Filtrar'
    );
  }
}
