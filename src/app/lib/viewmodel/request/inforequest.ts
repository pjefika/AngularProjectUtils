export class InfoRequest {
    rqst: string; // POST ou GET.
    _data?: any; // Data para passar no POST ou GET.
    command?: string;
    path: string; // Caminho para o comando.
    timeout: number; // Tempo para quebrar o comando.
    isotherurl?: boolean = false;
}