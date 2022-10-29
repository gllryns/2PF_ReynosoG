import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosRoutingModule } from "./cursos-routing.module";
import { AgregarCursoComponent } from "./components/agregar-curso/agregar-curso.component";
import { EditarCursoComponent } from "./components/editar-curso/editar-curso.component";
import { ListaCursosComponent } from "./components/lista-cursos/lista-cursos.component";
import { DetalleCursoComponent } from "./components/detalle-curso/detalle-curso.component";
import { CursosInicioComponent } from "./components/cursos-inicio/cursos-inicio.component";
import { CursoService } from "./services/curso.service";

@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    DetalleCursoComponent,
    CursosInicioComponent,
  ],
  imports: [CommonModule, CursosRoutingModule],
  providers: [CursoService],
})
export class CursosModule {}
