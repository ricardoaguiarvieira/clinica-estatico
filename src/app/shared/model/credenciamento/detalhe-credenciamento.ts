import { DadosCredenciamento } from './dados-credenciamento';
import { DocumentoVistoria } from './documento-vistoria';

export class DetalheCredenciamento {

    numSolicitacao!: number;
    situacao!: string;
    codigoTipoSolicitacao!: number;
    nomeTipoSolicitacao!: string;
    operadorResponsavel?: string;
    dadosCredenciada!: DadosCredenciamento;
    documentoVistoria!: DocumentoVistoria;

    constructor() {}
}