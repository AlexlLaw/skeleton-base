import { EnumBaseType } from 'src/app/shared/types/enum-base.type';


export class EnumBase {

    private enum: EnumBaseType[];
    private _name: string;

    constructor(enumParam: EnumBaseType[], name?: string) {
        this.enum = enumParam;
        this._name = name;
    }

    getAll(): EnumBaseType[] {
        return this.enum;
    }

    getAllForSelect(): EnumBaseType[] {
      const list = [...this.enum];
      list.unshift(({ name: this._name ? this._name : 'Selecione', value: '' }));
      return list;
    }

    getById(value: any): EnumBaseType {
        return this.enum.find((item: EnumBaseType) => item.value === value);
    }

    getValue(name: any) {
        const result = this.enum.find((item: EnumBaseType) => item.name === name);
        return result ? result.value : null;
    }

    getName(value: string) {
        const result = this.enum.find((item: EnumBaseType) => item.value === value);
        return result ? result.name : null;
    }

}
