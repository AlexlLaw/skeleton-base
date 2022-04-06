import { ActivatedRoute } from '@angular/router';

export class RouterBase {
  public nameScreen: string;
  public iconButton: string;
  public title: string;
  public router: string;

  private _listingComponent: any;
  private _formComponent: any;
  private _functionality: string;
  private _routerList: string;
  private _routerForm: string;

  constructor(
    public listingComponent: any,
    public formComponent?: any,
    public functionality?: string,
    public routerList?: string,
    public routerForm?: string,
    public activatedRoute?: ActivatedRoute
    ) {
    this._listingComponent = listingComponent;
    this._formComponent = formComponent;
    this._functionality = functionality;
    this._routerList = routerForm;
    this._routerForm = routerList;
  }

  public setParameters(event?: any): void {
    if (event instanceof this._listingComponent) {
      this.nameScreen = 'Adicionar';
      this.title = 'Lista de ' + this._functionality;
      this.router = this._routerList;
      this.iconButton = 'las la-plus';
      return;
    }

    if (event instanceof this._formComponent) {
      this.nameScreen = 'Listar';
      this.iconButton = 'las la-filter';
      this.title = event.pageId ? `Atualização de ${this._functionality}` : `Cadastro de ${this._functionality}`;
      this.router = this._routerForm;
      return;
    }
  }
}
