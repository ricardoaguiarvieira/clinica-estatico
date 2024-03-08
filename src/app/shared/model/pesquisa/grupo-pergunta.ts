import { Pergunta } from './pergunta';

export interface GrupoPergunta {
    idGrupoPergunta:number;
    ordemGrupoPergunta:number;
    listaPergunta:Array<Pergunta>;
}