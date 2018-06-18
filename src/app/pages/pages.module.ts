import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";
import { PagesComponent } from "./pages.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        DashboardComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        PagesComponent
    ],
    imports:[
        PAGES_ROUTES,
        SharedModule,
        FormsModule
    ]
})

export class PagesModule { }