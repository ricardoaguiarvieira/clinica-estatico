export class AbstractEntity {
    id?: number;
    codigo?: string

    isValid(): boolean {
        return !!(this.id && this.codigo);
    }
}