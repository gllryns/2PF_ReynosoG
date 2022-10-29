import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginaNoEncontradaComponent } from "./components/pagina-no-encontrada/pagina-no-encontrada.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MaterialModule } from "../shared/material.module";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    PaginaNoEncontradaComponent,
    InicioComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class CoreModule {}
