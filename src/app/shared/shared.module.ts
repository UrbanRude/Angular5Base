import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations:[
        HeaderComponent,
        NopagefoundComponent,
        SidenavComponent,
        BreadcrumbsComponent,
    ],
    imports:[
        MaterialModule,
        CommonModule        
    ],
    exports:[
        HeaderComponent,
        NopagefoundComponent,
        SidenavComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule { }