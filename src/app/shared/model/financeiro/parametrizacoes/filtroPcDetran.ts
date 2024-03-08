import { classificacaoConta } from 'src/app/shared/enum/ClassificacaoConta.enum';
import { Pageable } from '../../pageable';
import { PlanoContasGdf } from './planoContasGdf';

  export class FiltroPcDetran extends Pageable{

    id?: number;
    codigo?: number;
    nivelContaDetran?: string;
    tipoContaDetran?: string;
    pcSiggoDetran?: string;
    pcSiggoGdf?: string;
    observacaoDetran?: string;
    status?: boolean;
    dataStatus?: Date;
    listaTodos?: PlanoContasGdf[];
    listPCDetran?: [];
    classificacaoConta?: classificacaoConta;
}
