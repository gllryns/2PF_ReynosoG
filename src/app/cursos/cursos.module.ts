import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';


@NgModule({
  declarations: [
    CursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    DetalleCursoComponent,
    CursosInicioComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
