import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";
import { PagesComponent } from "./pages.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';

import { ChartsModule } from 'ng2-charts';
import { GraphicBarComponent } from '../components/graphic-bar/graphic-bar.component';


@NgModule({
    declarations:[
        DashboardComponent,
        PagesComponent,
        GraphicDoughnutComponent,
        GraphicBarComponent
    ],
    exports:[
        DashboardComponent,
        PagesComponent,
        GraphicDoughnutComponent,
        GraphicBarComponent
    ],
    imports:[
        PAGES_ROUTES,
        SharedModule,
        FormsModule,
        ChartsModule,
        MaterialModule
    ]
})

export class PagesModule { }