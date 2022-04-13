import { EnumBase } from './enum-base.model';


export class EnumRestriction extends EnumBase {
  constructor() {
    super([
      { value: 'Manager', name: 'Administrador' },
      { value: 'employee', name: 'Usuario' },
    ]);
  }
}
