import { Alternativa } from './alternativa';

export interface Pergunta {
    idGrupoPergunta:number;
    idPergunta:number;
    descricaoPergunta:string;
    ordemPergunta:number;
    listaAlternativa:Array<Alternativa>;
}