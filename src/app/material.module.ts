/**
 * ARCHIVO PARA CARGAR LOS COMPONENTES
 * DE ANGULAR MATERIAL
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
         MatCardModule, 
         MatGridListModule,
         MatTableModule,
         MatPaginatorModule} from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule
    ]
})

export class MaterialModule{ }