/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export abstract class Enum<T> {
  nome: any;
  constructor(public id: T, public descricao: string) {}
  public abstract findById(value: T): Enum<T>;
  public abstract transformAllTo(idName: string, descName: string): any[];
  public static transformTo(
    idName: string,
    descName: string,
    ...enums: Enum<any>[]
  ): any[] {
    if (enums) {
      return enums.map((i) => {
        const obj:any =  JSON.parse(`{ '${idName}': '${i.id}', '${descName}':'${i.descricao} '}`);
        return obj;
      });
    }
    return [];
  }
}
