'use strict';

import {
    Component,
    OnInit,
    ViewEncapsulation }            from "@angular/core";

@Component({
    selector: 'positions',
    templateUrl: 'app/recruitment/skills/skills.html',
    styleUrls: [ 'dist/app/recruitment/skills/skills.css' ],
    encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}