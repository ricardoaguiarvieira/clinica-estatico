import { PlanoContasGdf } from './planoContasGdf';

export class PlanoContasDetran {

    id?: number;
    idPlanoContasDetranPai?: number;
    nivelContaDetran?: string;
    codigo?: string;
    tipoContaDetran?: number;
    pcSiggoDetran?: string;
    observacaoDetran?: string;
    status?: boolean;
    dataStatus?: Date;
    planoContasGdf?: PlanoContasGdf;
    listaSiggoGdf?: [];
    
    isValid(): boolean {
        return !!(this.id && this.codigo);
    }
}