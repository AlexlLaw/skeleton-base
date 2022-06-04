import { EnumBase } from './enum-base.model';


export class EnumMeses extends EnumBase {
  constructor() {
    super([
      { value: 1, name: 'janeiro' },
      { value: 2, name: 'Fevereiro' },
      { value: 3, name: 'Março' },
      { value: 4, name: 'Abril' },
      { value: 5, name: 'Maio' },
      { value: 6, name: 'Junho' },
      { value: 7, name: 'Julho' },
      { value: 8, name: 'Agosto' },
      { value: 9, name: 'Setembro' },
      { value: 10, name: 'Outubro' },
      { value: 11, name: 'Novembro' },
      { value: 12, name: 'Dezembro' },
    ]);
  }
}