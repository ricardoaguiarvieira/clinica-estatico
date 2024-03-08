import { ServidorResponsavel } from './servidorResponsavel';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '../pageable';
export class FiltroTriagemCnh {

    dataFim?: string;
    dataInicio?: string;
    dtPessoaCandidato?: string;
    renach?: string;
    tipoArquivo?: string;
    //page?: Pageable;
    codigoNuhab?: number;
    dataAberturaProcesso?:	string;
    dataProcessamento?:	string;
    erroCodigo?:	string;
    erroDescricao?:	string;
    id?:	number;
    dtPessoaClinica?: number;
    nomeClinica?:	string;
    prazoCongelado?:	boolean;
    congelado?: string;
    responsavel?:	ServidorResponsavel[];
    situacaoCodigo?:	string;
    situacaoDescricao?:	string;
    responsavelNome?: string;
    
    constructor(){
        const pageEvent: PageEvent = new PageEvent()
        this.dataFim = '';
        this.dataInicio = '';
        this.renach = '';
        this.congelado = '';
    }
}
