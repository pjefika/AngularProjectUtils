import { NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AngularProjectUtilsComponent } from './angular-project-utils.component';
import { ClipboardService } from '../util/services/clipboard/clipboard.service';
import { RequestService } from '../util/services/request/request.service';
import { AlertComponent } from '../components/alert/alert.component';
import { ToastyComponent } from '../components/toasty/toasty.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { ComponentSuperService } from '../util/services/component-super-service/component-super.service';
import { ExceptionService } from '../util/services/exceptions/exception.service';

@NgModule({
    declarations: [
        AngularProjectUtilsComponent,
        AlertComponent,
        ToastyComponent
    ],
    imports: [
        ToastyModule.forRoot(),
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        ClarityModule
    ],
    exports: [
        AngularProjectUtilsComponent,
        ToastyModule
    ],
    providers: [
        ClipboardService,
        RequestService,
        ComponentSuperService,
        ExceptionService
    ]
})
export class AngularProjectUtilsModule { }
