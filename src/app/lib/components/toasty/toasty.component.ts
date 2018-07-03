import { Component, OnInit, Input } from "@angular/core";
import { ToastyService, ToastyConfig, ToastOptions } from "ng2-toasty";

@Component({
    selector: "toasty-component",
    templateUrl: "toasty.component.html"
})

export class ToastyComponent implements OnInit {

    constructor(private toastyService: ToastyService,
        private toastyConfig: ToastyConfig) {
        this.toastyConfig.position = "top-right";
    }

    public ngOnInit() { }

    public addToasty(titulo: string, mensagem: string, showclose: boolean, theme: string, timeout: number) {
        let toastOptions: ToastOptions = {
            title: titulo,
            msg: mensagem,
            showClose: showclose,
            theme: theme,
            timeout: timeout
        };
        this.showtoasty(toastOptions);
    }


    private showtoasty(toastOptions: ToastOptions) {
        switch (toastOptions.theme) {
            case "default":
                this.toastyService.default(toastOptions);
                break;
            case "info":
                this.toastyService.info(toastOptions);
                break;
            case "success":
                this.toastyService.success(toastOptions);
                break;
            case "wait":
                this.toastyService.wait(toastOptions);
                break;
            case "error":
                this.toastyService.error(toastOptions);
                break;
            case "warning":
                this.toastyService.warning(toastOptions);
                break;
        }
    }

}