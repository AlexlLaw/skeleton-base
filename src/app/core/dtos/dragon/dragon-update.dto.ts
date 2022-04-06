export class DragonUpdateDto {
  public id: string;
  public name: string;
  public type: string;
  public histories: Array<any> = new Array<any>();

  constructor(object?: any) {
    this.id = object.id;
    this.name = object.name;
    this.type = object.type;
    this.histories = object.histories;
  }
}
