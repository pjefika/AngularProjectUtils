import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExceptionMessage } from '../../../viewmodel/exception/exception-message';
// import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ExceptionService {

    constructor() { }

    public handleError(error: any): Promise<any> {
        return Promise.reject(error);
    }

    public handleErrorKing(error: any): Promise<any> {
        let er: ExceptionMessage;
        if (error.message === "Timeout has occurred") {
            er = {
                tError: "Tempo Excedido. Cod.10",
                mError: "Tempo de busca excedido, por favor realize a busca novamente. "
            }
            return Promise.reject(er);
        }
        if (error.status === 0) {
            er = {
                tError: "Sem Conexão. Cod.20",
                mError: "Sem conexão com a internet, por favor verifique sua rede e tente novamente."
            }
            console.log(er);
            return Promise.reject(er);
        }
        if (error.status >= 400 && error.status < 500) {
            switch (error.status) {
                case 400:
                    er = {
                        tError: "Erro (\"Solicitação Inválida\"). Cod.20.1",
                        mError: "Houve um problema ao realizar Request."
                    }
                    break;
                case 404:
                    er = {
                        tError: "Erro (\"Página não encontrada\"). Cod.20.2",
                        mError: "Houve um problema ao realizar Request a página não foi encontrada, por favor contate o administrador do sistema."
                    }
                    break;
                case 405:
                    er = {
                        tError: "Erro (\"Método não permitido\"). Cod.20.3",
                        mError: "Houve um problema ao realizar Request, o método que está sendo executado não é permitido."
                    }
                    break;
                case 407:
                    er = {
                        tError: "Erro (\"Proxy\"). Cod.20.4",
                        mError: "Houve um problema ao realizar Request, verifique seu Proxy."
                    }
                    break;
                default:
                    er = {
                        tError: "Erro (\"Não mapeado\"). Cod.20.5",
                        mError: "Por favor contate o administrador do sistema."
                    }
                    break;
            }
            console.log(er);
            return Promise.reject(er);
        }
        if (error.status >= 500) {
            console.log(error);
            switch (error.status) {
                case 500:
                    er = {
                        tError: "Ops, Aconteceu algo. Cod.30",
                        mError: ""
                    }
                    break;
                case 503:
                    er = {
                        tError: "Ops, Aconteceu algo. Cod.30.1",
                        mError: "Serviço Indisponível, caso problema persista por favor entrar em contato com o administrador do sistema."
                    }
                    break;
                default:
                    er = {
                        tError: "Ops, Aconteceu algo. Cod.30.2",
                        mError: ""
                    }
                    break;
            }
            return Promise.reject(er);
        }
    }

}

// https://www.hostinger.com.br/tutoriais/o-que-e-http-error-e-principais-codigos-http/