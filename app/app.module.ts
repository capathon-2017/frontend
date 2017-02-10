'use strict';

import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from "@angular/http";
import { BrowserModule }                from '@angular/platform-browser';

import { InputTextModule }              from 'primeng/primeng';

import { AppComponent }                 from './app.component';

import { appRoutingProviders, routing } from "./app.routing";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ]
})
export class AppModule { }