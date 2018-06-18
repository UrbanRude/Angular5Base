/**
 * ARCHIVO PARA CARGAR LOS COMPONENTES
 */

import { NgModule } from "@angular/core";
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatSidenavModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatProgressBarModule,
         MatListModule,
         MatIconModule,
         MatCardModule } from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatIconModule,
        MatCardModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatIconModule,
        MatCardModule
    ]
})

export class MaterialModule{ }