import { Mensagem } from './mensagem';

export interface MensagemNotificacao {
  listaMensagem: Mensagem[];
  qtdeNotificacaoNaoLida?: number;
  mensagens: any;
}
