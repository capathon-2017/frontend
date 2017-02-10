'use strict';

import {
    Component,
    OnInit,
    ViewEncapsulation }            from "@angular/core";

@Component({
    selector: 'positions',
    templateUrl: 'app/recruitment/positions/positions.html',
    styleUrls: [ 'dist/app/recruitment/positions/positions.css' ],
    encapsulation: ViewEncapsulation.None
})
export class PositionsComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}