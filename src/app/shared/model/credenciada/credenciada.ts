import Servico from '../servico'
import { dadosPenalidade } from './penalidadeCredenciada'
export class Credenciada {
    idEmpresaTipoCredenciada: number
    cnpj: string
    nomeFantasia: string
    nomeEmpresarial: string
    codigoTipoCredenciamento: number
    txtTipoCredenciamento: string
    codigoTipoSituacao: number
 
    dtInicioCredenciamento: Date
    dtFimCredenciamento: Date
    dtValidadeDocumentoISO: Date
    dtValidadeSeguro: Date


    txtEmail: string
    txtLinkDiario: string
    txtTipoAreaCredenciamento?: string
    codigoTipoAreaCredenciamento?: number

    txtLogradouro: string
    txtComplemento: string
    nomeBairro: string
    nomeCidade: string
    sgUf: string
    numeroCep: string
    numeroEndereco: string
    txtSite: string
    txtSac: string
    codigoClassificassao: string


    contato1: string;
    contato2: string;
    contato3: string;
    
    valorServico?: number;
    servicos?: Servico[];
    selecionado: boolean;
    penalidades?: dadosPenalidade[];
    id: number;
    codigoModalidade?: number;

    constructor(){
        this.codigoTipoSituacao = 1;
        this.txtComplemento = '';
        this.selecionado = false;
    }
}