import { Roles } from './rules';

export class Usuario {
  token: string;
  cpf: string;
  nome: string;
  email: string;
  imagem64: string;
  telefone: string;
  usernameDomain: string;
  //roles: Roles[] voltar assim que retorno for da API
  isTokenValido = true;
  roles: string[];
  constructor() { }
}