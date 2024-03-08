import { Credenciada } from './credenciada/credenciada';
export default class Servico {
    idServico?:                number;
    nomeServico?:              string;
    codigoTipoCredenciamento?: number;
    txtTipoCredenciamento?:    string;
    indSituacaoAtiva?:         string;
    codigoTipoValor?:          number;
    valorServico?:             number;
    indServicoDigitalAtivo?:   string;
    txtPortaria?:              string;
    
    credenciadas?:             Credenciada[];

    // codigoRamoAtuacao?:    number;
    // descricaoRamoAtuacao?: string;
    // descricaoAdicionais?:  string;
    // idValorFixo?:          number;
}