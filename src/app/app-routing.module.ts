import { FrenchComponent } from './paginas/french/french.component';
import { InglesComponent } from './paginas/ingles/ingles.component';
import { PortuguesComponent } from './paginas/portugues/portugues.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:PaginaInicialComponent},
  {path:'pt-br',component:PortuguesComponent},
  {path:'ing',component:InglesComponent},
  {path:'french',component:FrenchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
