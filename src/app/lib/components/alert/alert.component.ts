import { Component, OnInit, Input } from '@angular/core';
import { AlertMessage } from '../../viewmodel/alert-message/alert-message';

@Component({
    selector: 'alert-component',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})

export class AlertComponent implements OnInit {

    @Input() public alertMessage: AlertMessage;

    constructor() { }

    ngOnInit() { }
}