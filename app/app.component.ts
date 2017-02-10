'use strict';

import {
    Component,
    OnInit,
    ViewEncapsulation }                 from '@angular/core';

@Component({
    selector: 'recruitment-portal',
    templateUrl: 'app/app.html',
    styleUrls: [ 'dist/app/app.css' ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}