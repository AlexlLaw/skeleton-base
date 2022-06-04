import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  private _subtitle: string;
  private _typePage: string;

  constructor() { }

  public get getSubtitle(): string {
    return this._subtitle;
  }

  public set setSubtitle(value: string) {
    this._subtitle = value;
  }

  public get getTypePage(): string {
    return this._typePage;
  }

  public set setTypePage(value: string) {
    this._typePage = value;
  }
}
