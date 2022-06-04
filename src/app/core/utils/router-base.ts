import { DoCheck, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ParamsService } from '../services/params.service';

export class RouterBase implements OnInit, DoCheck {

  public title: string;
  public subtitle: string;
  public router: string;
  public routerAlternative: string;
  public nameScreen: string;
  public typePage: string;

  constructor(public paramsService: ParamsService, public titleService?: Title) {}

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
    this.subtitle = this.paramsService.getSubtitle;
    this.typePage = this.paramsService.getTypePage;
    this.routers();
  }

  ngDoCheck(): void {
    this.title = this.titleService.getTitle();
    this.subtitle = this.paramsService.getSubtitle;
    this.typePage = this.paramsService.getTypePage;
    this.routers();
  }

  public routers(): void {
    this.typePage === 'listar' && (
      this.router = 'cadastrar',
      this.nameScreen = 'Adicionar'
    );

    this.typePage === 'cadastrar' && (
      this.router = 'listar',
      this.nameScreen = 'Filtrar'
    );

    this.typePage === 'editar' && (
      this.router = 'listar',
      this.nameScreen = 'Filtrar'
    );
  }

  /**
   *
   * @param event
   * Metodo feito para inserir nomes dos botões e redirecionamento caso a funcionalidade não seja um crud padrão
   */
  public setRoutersAndNameScreeCustom(event: any): void {
    event?.redirect && (
      this.routerAlternative = event.redirect
    );

    !event?.redirect && (
      this.routerAlternative = undefined
    );
    this.nameScreen = event.nameScreen;
  }

}
