import { Injectable } from '@angular/core';
import { LinkService } from './link.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoRequest } from '../../../viewmodel/request/inforequest';

import 'rxjs/Rx';
import 'rxjs/add/operator/timeout'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService extends LinkService {

    public httpOptions;

    constructor(public httpClient: HttpClient) {
        super();
    }

    public request(infoResquest: InfoRequest): Promise<any> {
        let headers = new HttpHeaders({})
        headers = headers.set("Content-Type", "application/json");
        if (infoResquest.headeroptions) {
            headers = headers.set("Authorization", infoResquest.headeroptions);
        }
        this.httpOptions = {
            headers: headers
        }
        switch (infoResquest.rqst) {
            case "PUT":
                return this.put(infoResquest);
            case "POST":
                return this.post(infoResquest);
            case "GET":
                return this.get(infoResquest);
            case "DELETE":
                return this.delete(infoResquest);
        }
    }

    private get(infoResquest: InfoRequest): Promise<any> {
        return this.httpClient
            .get(super.startMountUrl(infoResquest), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

    private post(infoResquest: InfoRequest): Promise<any> {
        console.log(this.startMountUrl(infoResquest));
        return this.httpClient
            .post(this.startMountUrl(infoResquest), JSON.stringify(infoResquest._data), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

    private put(infoResquest: InfoRequest): Promise<any> {
        console.log(this.startMountUrl(infoResquest));
        return this.httpClient
            .put(this.startMountUrl(infoResquest), JSON.stringify(infoResquest._data), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

    private delete(infoResquest: InfoRequest): Promise<any> {
        return this.httpClient
            .delete(super.startMountUrl(infoResquest), this.httpOptions)
            .timeout(infoResquest.timeout)
            .toPromise()
            .then(resposta => {
                return resposta
            })
            .catch(super.handleError);
    }

}