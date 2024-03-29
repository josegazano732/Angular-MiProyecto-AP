import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './componentes/inicio-sesion/interceptors/token.interceptor';
import { AuthInterceptor } from './componentes/inicio-sesion/interceptors/auth.interceptor';


import { PorfolioService } from './servicios/porfolio.service';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ImgAcercaComponent } from './componentes/img-acerca/img-acerca.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftSkillComponent } from './componentes/hard-soft-skill/hard-soft-skill.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';






@NgModule({
  // Define los componentes (vistas) que pertenecen a este módulo
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImgAcercaComponent,
    ExperienciasComponent,
    EducacionComponent,
    HardSoftSkillComponent,
    PiePaginaComponent,
    InicioSesionComponent,
    PortfolioComponent,
    ProyectosComponent,
    
    
  ],
  // Clases que pertenecen a otros módulos y que queremos usar en este módulo.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Servicios que queremos que estén disponibles en este módulo.
  providers: [
    PorfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  
  ],
  // Componente principal que inicia la aplicación.
  bootstrap: [AppComponent]
})


export class AppModule { }
