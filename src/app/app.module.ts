import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/* SECCION PARA IMPORTAR MODULOS*/
import { MaterialModule } from './material.module';

/* SECCION PARA IMPORTAR RUTAS */
import { APP_ROUTES } from './app.routes';

/* SECCION PARA IMPORTAR SERVICIOS */
import { APP_PROVIDERS } from './app.providers';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
