export class InfoRequest {
    rqst: string; // POST ou GET.
    _data?: any; // Data para passar no POST ou GET.
    command?: string; // Nome do comando
    path: string; // Caminho para o comando.
    timeout: number; // Tempo para quebrar o comando.
    isotherurl?: boolean = false; // Se for outro url
    headeroptions?: string; // Opções de header
    linklocation?: string; // Location Link
}