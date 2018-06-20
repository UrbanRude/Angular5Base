import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            { path:'dashbdoard', component:DashboardComponent}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );