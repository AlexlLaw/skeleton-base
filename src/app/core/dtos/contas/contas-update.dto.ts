export class ContasUpdateDto {
  public id: number;
  public ano: number;
  public mes: number;
  public descricao: string;
  public valor: number;
  public fixo: boolean;
  public pago: boolean;

  constructor(obj?: any) {
    obj && (
      this.id  = obj.id,
      this.ano = Number(obj.ano),
      this.mes = Number(obj.mes),
      this.descricao = obj.descricao,
      this.valor = parseInt(obj.valor),
      this.fixo  = obj.fixo,
      this.pago  = obj.pago
    );
  }
}
