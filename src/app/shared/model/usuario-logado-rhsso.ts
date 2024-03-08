import { RoleRhsso } from './role-rhsso';

export class UsuarioLogadoRhsso {

    cpf?: string;
    email?: string;
    imagem64?: string;
    nome?: string;
    roles?: RoleRhsso[];
    telefone?: string;
    token?: string;

    constructor() { }
}
