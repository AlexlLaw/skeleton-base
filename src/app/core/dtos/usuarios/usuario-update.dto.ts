export class UsuarioUpdateDto {
  public id: string;
  public cpf: string;
  public nome: string;
  public sobrenome: string;
  public ativo: boolean;
  public restricoes: string;
  public senha: string;
  public salario: number;

  constructor(object?: any) {
    this.id = object.id;
    this.cpf = object.cpf;
    this.nome = object.nome;
    this.sobrenome = object.sobrenome;
    this.ativo = object.ativo;
    this.restricoes = object.restricoes;
    this.senha = object.senha;
    this.salario = Number(object.salario);
  }
}
