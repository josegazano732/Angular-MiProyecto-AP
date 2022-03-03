import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ImgAcercaComponent } from './componentes/img-acerca/img-acerca.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftSkillComponent } from './componentes/hard-soft-skill/hard-soft-skill.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ImgAcercaComponent,
    ExperienciasComponent,
    EducacionComponent,
    HardSoftSkillComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
