import { TipoMensagem } from './tipoMensagem';

export interface Mensagem {
    numeroNotificacaoUsuario: string;
    cpfUsuarioNotificado: string;
    tipoNotificacao: TipoMensagem;
    identificadorNotificacao: string;
    situacaoNotificacaoEnum: string;
    dataHoraNotificacao: string;
    dataHoraLeitura: string;
    dataHoraInativacao: string;
}