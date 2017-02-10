'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'app/sidebar/sidebar.html',
    styleUrls: [ 'dist/app/sidebar/sidebar.css' ],
    encapsulation: ViewEncapsulation.None
})

export class SidebarComponent {
    constructor() {
    }
}