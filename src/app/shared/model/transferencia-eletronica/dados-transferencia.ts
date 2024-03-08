import { DadosComprador } from './dados-comprador';
import { DadosVeiculo } from './dados-veiculo';
import { DadosVendedor } from './dados-vendedor';
import { HistoricoTramitacao } from './historico-tramitacao';


export class DadosVeiculoTransferencia {

    aceiteComprador?: boolean;
    assinaturaDigital?: string;
    id?: 0;
    modalidade?: string;
    origem?: string;
    situacao?: any;
    timeStampTransferencia?: string;
    comprador?: DadosComprador;
    historico?: HistoricoTramitacao[];
    veiculo?: DadosVeiculo;
    vendedor?: DadosVendedor;
    boletoCancelamentoPago?: boolean;
    boletoCancelamentoGerado?: boolean;
    constructor() { }

}