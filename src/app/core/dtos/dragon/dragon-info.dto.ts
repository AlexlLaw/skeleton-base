export class DragonInfoDto {
  public id: string;
  public createdAt: string;
  public name: string;
  public type: string;
  public histories: Array<any> = new Array<any>();

  constructor(object?: any) {
    this.id = object.id;
    this.createdAt = object.createdAt;
    this.name = object.name;
    this.type = object.type;
    this.histories = object.histories;
  }
}
