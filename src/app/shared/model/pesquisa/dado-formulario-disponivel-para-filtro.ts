import { OrigemSolicitacaoDTO } from './dado-origem-solicitacao';
import { DadoServicosPesquisaDTO } from './dado-servico-pesquisa';

export class DadosFormulariosDisponiveisParaFiltroDTO {
    idChecklist!: number;
    descricaoChecklist!:string;
    listaServicoAvaliado!:Array<DadoServicosPesquisaDTO>;
    listaOrigemSolicitacao!: Array<OrigemSolicitacaoDTO>;

}