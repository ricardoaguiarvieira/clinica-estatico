import { Socio } from './socio';

export class DadosCredenciamento {

    cnpj!: string;
    razaoSocial!: string;
    nomeFantasia!: string;
    socios!: Socio[];
    sac!: string;
    modalidade!: string;
    email!: string;
    site!: string;
    cep!: string;
    logradouro!: string;
    complemento!: string;
    numero!: string;
    bairro!: string;
    cidade!: string;
    estado!: string;
    telefone1!: string;
    telefone2?: string;
    telefone3?: string;
    indicadorConformidade!: string;
    codigoEtapa!: number;
    codigoSituacao!: number;
    nomeEtapa!: string;
    nomeSituacao!: string;
    numeroProcessoSEI!: string;

    constructor() { }
}