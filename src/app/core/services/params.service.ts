import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  private _subtitle: string;

  constructor() { }

  public get getSubtitle(): string {
    return this._subtitle;
  }

  public set setSubtitle(value: string) {
    this._subtitle = value;
  }
}
