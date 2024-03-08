import { classificacaoConta } from 'src/app/shared/enum/ClassificacaoConta.enum';
import { Pageable } from '../../pageable';

export class FiltroPcGDF extends Pageable{

    id?: number;
    codigo?: number;
    nivelContaGdf?: string;
    tipoContaGdf?: string;
    pcSiggoGdf?: string;
    observacao?: string;
    status?: boolean;
    dataStatusGdf?: Date;
    classificacaoConta?: classificacaoConta;
}
