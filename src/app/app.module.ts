import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { PortuguesComponent } from './paginas/portugues/portugues.component';
import { InglesComponent } from './paginas/ingles/ingles.component';
import { FrenchComponent } from './paginas/french/french.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginaInicialComponent,
    PortuguesComponent,
    InglesComponent,
    FrenchComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
