export class PerguntaSelecionada {
    idPergunta!:number;
    idAlternativa!: number;

    constructor(idPergunta:number, idAlternativa: number){
        this.idPergunta = idPergunta;
        this.idAlternativa = idAlternativa;
    }
}