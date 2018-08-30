import { Injectable } from '@angular/core';
import { ExceptionService } from '../exceptions/exception.service';
import { ToastyComponent } from '../../../components/toasty/toasty.component';

@Injectable()
export class ComponentSuperService extends ExceptionService {

    constructor(public toastyComponent: ToastyComponent) {
        super();
    }

    public showToasty(titulo: string, mensagem: string, showclose: boolean, theme: string, timeout: number) {        
        this.toastyComponent.addToasty(titulo, mensagem, showclose, theme, timeout);
    }

}