export class DragonCreateDto {

  public name: string;
  public type: string;

  constructor(object?: any) {
    this.name = object.name;
    this.type = object.type;
  }
}
