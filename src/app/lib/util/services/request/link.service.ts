import { Injectable } from '@angular/core';
import { InfoRequest } from '../../../viewmodel/request/inforequest';
import { ExceptionService } from '../exceptions/exception.service';

declare var require: any

import * as _ from "lodash";
import { Endpoint } from '../../../viewmodel/request/endpoints';

@Injectable()
export class LinkService extends ExceptionService {

    constructor() {
        super();
    }

    public startMountUrl(infoResquest: InfoRequest) {
        // Valida se request é alguma URL não mapeada ou especifica.
        if (infoResquest.isotherurl) {
            this.isOtherUrl(infoResquest);
        } else {
            return this.mountUrlIp(infoResquest);
        }
    }

    private isOtherUrl(infoResquest: InfoRequest): string {
        let url: string = infoResquest.path;
        if ((infoResquest.rqst === "GET" || infoResquest.rqst === "DELETE") && infoResquest._data) {
            url = url + infoResquest._data;
        }
        return url;
    }

    private mountUrlIp(infoResquest: InfoRequest): string {
        let endpoint: { nome: string; pathName: string; }
        let urlPrincipal: string;
        endpoint = _.find(this.getEndpoint().endpoints, ["nome", infoResquest.command]);
        if ((infoResquest.rqst === "GET" || infoResquest.rqst === "DELETE") && infoResquest._data) {
            urlPrincipal = infoResquest.linklocation + endpoint.pathName + infoResquest._data;
        } else {
            urlPrincipal = infoResquest.linklocation + endpoint.pathName;
        }
        return urlPrincipal;
    }

    private getEndpoint(): Endpoint {
        let endpoint: Endpoint = require('../app/lib/assets/endpoints-links/endpoints.json'); //Mock Produção
        return endpoint;
    }

}