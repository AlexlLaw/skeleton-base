import { EnumBase } from './enum-base.model';

export class AnosEnum extends EnumBase {
  constructor() {
    super([
      { value: '21', name: '2021' },
      { value: '22', name: '2022' },
      { value: '23', name: '2024' },
      { value: '24', name: '2024' },
      { value: '25', name: '2026' },
    ]);
  }

}
