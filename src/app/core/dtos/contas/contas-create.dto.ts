export class ContasCreateDto {
  public ano: number;
  public mes: string;
  public descricao: string;
  public valor: string;
  public fixo: boolean;
  public pago: boolean;

  constructor(obj?: any) {
    obj && (
      Object.assign(this, obj)
    );
  }
}
