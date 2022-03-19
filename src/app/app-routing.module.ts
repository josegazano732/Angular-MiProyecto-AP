import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';





const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'loguin', component: InicioSesionComponent },
  { path: '', redirectTo: 'loguin', pathMatch:'full' }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
