'use strict';

import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from "@angular/http";
import { BrowserModule }                from '@angular/platform-browser';

import { InputTextModule }              from 'primeng/primeng';

import { AppComponent }                 from "./app.component";
import { AuthModule }                   from "./auth/auth.module";
import { RecruitmentModule }            from "./recruitment/recruitment.module";
import { SidebarComponent }             from './sidebar/sidebar.component';

import { appRoutingProviders, routing } from "./app.routing";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        SidebarComponent
    ],
    imports: [
        AuthModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        RecruitmentModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ]
})
export class AppModule { }