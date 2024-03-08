import { HabilitacaoResumido } from './habitacao-resumido';
import { VinculoVeiculo } from './vinculo-veiculo';

export class UsuarioLogado {

    cpf?: string;
    email?: string;
    habilitacao?: HabilitacaoResumido;
    imagem64?: string;
    nome?: string;
    roles?: string[];
    telefone?: string;
    vinculos?: VinculoVeiculo[];

    constructor() { }

}