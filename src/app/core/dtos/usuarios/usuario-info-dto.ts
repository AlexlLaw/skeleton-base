export class UsuarioInfoDto {
  public id: string;
  public cpf: string;
  public nome: string;
  public sobrenome: string;
  public ativo: boolean;
  public primeiroAcesso: boolean;
  public restricoes: string;
  public senha: string;

  constructor(object?: any) {
    this.id = object.id;
    this.cpf = object.cpf;
    this.nome = object.nome;
    this.sobrenome = object.sobrenome;
    this.ativo = object.ativo;
    this.primeiroAcesso = object.primeiroAcesso;
    this.restricoes = object.restricoes;
    this.senha = object.senha;
  }
}
