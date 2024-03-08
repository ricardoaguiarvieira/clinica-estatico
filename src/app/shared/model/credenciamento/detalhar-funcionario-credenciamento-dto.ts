import { TipoDocumento } from './tipo-documento';

export class DetalheProfissionalCredenciamentoDTO {
    idProfissionalEmpresa!: number;
    numSolicitacao!: number;
    nomeCompleto!: string;
    rg!: string;
    cpf!: string;
    dataNascimento!: Date;
    filiacao1!: string;
    filiacao2?: string;
    telefone!: string;
    email!: string;
    cep!: string;
    logradouro!: string;
    numeroEndereco!: string;
    complemento!: string;
    bairro!: string;
    cidade!: string;
    uf!: string;
    documentos: TipoDocumento[] = [];
    indicadorConformidade!: string;
    situacao!: number;

    constructor() {}
}