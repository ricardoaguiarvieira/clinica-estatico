import { NotificacaoUsuario } from './notificacao-usuario';

export class MensagemAleatoria {
  id?: number;
  notificacaoUsuario?: NotificacaoUsuario | undefined;
  descricaoMensagemAleatoria?: string;
  assuntoMensagem?: string;
  idNotificacaoUsuario?: number;
  isSelecionada?: boolean;
  constructor() {}
}
