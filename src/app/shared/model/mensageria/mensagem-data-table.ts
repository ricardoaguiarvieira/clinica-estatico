import { Mensagem } from './mensagem';

export class MensagemDataTable {
    codTipoNotificacao?: number;
    id?: number;
    tsFimPublicacao?: string;
    tsInicioPublicacao?: string;
    txtAssuntoMensagem?: string;
    txtDescricaoMensagem?: string;
    isSelecionalda?: boolean;
}