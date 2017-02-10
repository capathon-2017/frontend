'use strict';

import { NgModule }                     from '@angular/core';

import { appRoutingProviders, routing } from './auth.routing';

import {
    DropdownModule,
    SelectButtonModule,
    ToggleButtonModule }                from 'primeng/primeng';

import { BrowserModule }                from '@angular/platform-browser'
import { FormsModule }                  from '@angular/forms';

import { LoginComponent }            from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        DropdownModule,
        FormsModule,
        routing,
        SelectButtonModule,
        ToggleButtonModule
    ],
    providers: [
        appRoutingProviders
    ]
})
export class AuthModule { }