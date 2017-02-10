import { ModuleWithProviders }      from "@angular/core";
import { Routes, RouterModule }     from "@angular/router";

import { PositionsComponent }        from "./positions/positions.component";
import { SkillsComponent }           from "./skills/skills.component";

const appRoutes: Routes = [
    {
        path: 'positions',
        component: PositionsComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    }
];

export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);