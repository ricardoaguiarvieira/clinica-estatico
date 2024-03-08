import { DadoRespostaPesquisaSatisfacaoDTO } from './dado-resposta-pesquisa-satisfacao';
import { GrupoPergunta } from './grupo-pergunta';

export interface Checklist {
    idhecklist:number;
    descricaoChecklist:string;
    dadosRespostaPesquisaSatisfacao: DadoRespostaPesquisaSatisfacaoDTO;
    listaGrupoPergunta:Array<GrupoPergunta>;
}