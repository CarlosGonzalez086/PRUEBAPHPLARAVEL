import { ModuleWithProviders } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { EncuestaComponent } from "./components/encuesta/encuesta.component";

const appRoutes: Routes = [
    { path: 'encuesta',component :EncuestaComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =RouterModule.forRoot(appRoutes);