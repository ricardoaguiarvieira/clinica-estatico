import { EnderecoCompleto } from '../endereco-completo';
import { TipoProfissional } from './tipo-profissional';


export class Profissional {

    id?: number;
    idEmpresaTipoCredenciada?: string;
    idEmpresaCredenciamentoProfissional?: string;

    nome!: string;
    filiacao1!: string;
    filiacao2!: string;
    cpf?: string;
    dataNascimento!: string;

    documentoRG!: string;
    telefone!: string;
    email!: string;
    situacao!: string;

    endereco!: EnderecoCompleto;

    tipo?: TipoProfissional;
    
    constructor(){}
}
