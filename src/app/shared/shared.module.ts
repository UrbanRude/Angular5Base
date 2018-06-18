import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

@NgModule({
    declarations:[
        HeaderComponent,
        NopagefoundComponent,
        SidenavComponent
    ],
    exports:[
        HeaderComponent,
        NopagefoundComponent,
        SidenavComponent
    ]
})

export class SharedModule { }