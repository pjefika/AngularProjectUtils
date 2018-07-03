import { Injectable } from '@angular/core';
import { UrlEndPoint } from '../../../viewmodel/request/urlendpoint';
import { InfoRequest } from '../../../viewmodel/request/inforequest';
import { ExceptionService } from '../exceptions/exception.service';
import { Environment } from '../../../viewmodel/request/environment';

declare var require: any

@Injectable()
export class LinkService extends ExceptionService {

    public requestwhatlinkrequest: string = "PROD"; // valida link produção. // PROD // QA // EXT

    public environment: Environment;

    constructor() {
        super();
    }

    public getLinksMock(): UrlEndPoint {
        let urls: UrlEndPoint;
        switch (this.environment.env) {
            case "PROD":
                urls = require('../app/lib/assets/endpoints-links/links-prod.json'); //Mock Produção
                break;
            case "QA":
                urls = require('../app/lib/assets/endpoints-links/links-qa.json'); //Mock QA
                break;
            case "EXT":
                urls = require('../app/lib/assets/endpoints-links/links-ext.json'); //Mock EXT
                break;
        }
        return urls;
    }

    public moutUrl(infoResquest: InfoRequest): string {
        if (infoResquest.isotherurl) {
            return this.otherUrl(infoResquest);
        } else {
            return this.mountUrlP(infoResquest);
        }
    }

    private otherUrl(infoResquest: InfoRequest): string {
        let url: string = infoResquest.path;
        if (infoResquest.rqst === "GET" && infoResquest._data) {
            url = url + infoResquest._data;
        }
        return url;
    }

    private mountUrlP(infoResquest: InfoRequest) {
        let url: string;
        let uep = this.getLinksMock();
        uep.endpoints.forEach(endpoint => {
            if (endpoint.nome === infoResquest.command) {
                if (infoResquest.rqst === "GET" && infoResquest._data) {
                    url = endpoint.url + infoResquest.path + infoResquest._data;
                } else {
                    url = endpoint.url + infoResquest.path;
                }
            }
        });
        return url;
    }

}