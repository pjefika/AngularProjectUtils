import { Injectable } from '@angular/core';
import { LinkService } from './link.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoRequest } from '../../../viewmodel/request/inforequest';

import 'rxjs/Rx';
import 'rxjs/add/operator/timeout'
import 'rxjs/add/operator/toPromise';
import { Environment } from '../../../viewmodel/request/environment';

@Injectable()
export class RequestService extends LinkService {

    public httpOptions;

    constructor(public httpClient: HttpClient,
        public environment: Environment) {
        super();
        this.setEnvironment(environment);
    }

    public request(infoResquest: InfoRequest) {
        let headers = new HttpHeaders({})
        headers = headers.set("Content-Type", "application/json");
        if (infoResquest.headeroptions) {
            headers = headers.set("Authorization", infoResquest.headeroptions);
        }
        console.log(headers);
        this.httpOptions = {
            headers: headers
        }
        switch (infoResquest.rqst) {
            case "POST":
                return this.post(infoResquest);
            case "GET":
                return this.get(infoResquest);
        }
    }

    private get(infoResquest: InfoRequest): Promise<any> {
        // console.log("Fazendo GET");
        // console.log(infoResquest);
        return this.httpClient
            .get(super.moutUrl(infoResquest), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

    private post(infoResquest: InfoRequest): Promise<any> {
        // console.log("Fazendo POST");
        // console.log(infoResquest);
        console.log(this.moutUrl(infoResquest));
        return this.httpClient
            .post(this.moutUrl(infoResquest), JSON.stringify(infoResquest._data), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

    private setEnvironment(environment: Environment) {
        this.environment = environment;
    }



}