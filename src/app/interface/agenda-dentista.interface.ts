import { Agenda } from "./agenda.interface";

export interface AgendaDetista {
    matriculaDentista: string;
    nomeDentista: string;
    agenda: Agenda[];
}