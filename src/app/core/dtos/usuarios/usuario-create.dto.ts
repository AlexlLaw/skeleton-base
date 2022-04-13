export class UsuarioCreateDto {
  public cpf: string;
  public nome: string;
  public sobrenome: string;
  public ativo: boolean;
  public restricoes: string;
  public senha: string;

  constructor(object?: any) {
    this.cpf = object.cpf;
    this.nome = object.nome;
    this.sobrenome = object.sobrenome;
    this.ativo = true;
    this.restricoes = object.restricoes;
    this.senha = object.senha;
  }
}
