import { DadoRespostaAlternativa } from './dado-resposta-alternativa';

export interface Alternativa {
    idAlternativa:number;
    descricaoAlternativa:string;
    ordemAlternativa:number;
    dadosRespostaAlternativa?:DadoRespostaAlternativa
}