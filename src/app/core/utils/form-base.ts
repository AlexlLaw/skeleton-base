import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SubSink } from 'subsink';

export class FormBase {

  public pageId = '';
  public nameScreen = '';
  public subs = new SubSink();

  constructor(public router?: Router, public activatedRoute?: ActivatedRoute) {
    this.getParamsScreen();
  }

  public isFieldValid(form: FormGroup, field: string): boolean {
    return !form.get(field).valid && form.get(field).dirty;
  }

  /**
   * Função que obtem a ação a ser executada
   */
  public getParamsScreen(): void {
    this.pageId = this.activatedRoute.snapshot.params.id;
    this.nameScreen = this.getScreenName(this.pageId);
  }

  /**
   * Metodo para pegar o nome para a tela (cadastrar/editar)
   * @param id Identificador
   * @param detalhes Bolean para informar se a tela é de detalhes
   */
  public getScreenName(id?: string, detalhes = false): string {
    return !id || !id.trim()
      ? 'Adicionar'
      : id && !detalhes
      ? 'Atualizar'
      : 'Visualizar';
  }
}
