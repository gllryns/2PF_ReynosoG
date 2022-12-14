import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsuariosRoutingModule } from "./usuarios-routing.module";

import { ListaUsuariosComponent } from "./components/lista-usuarios/lista-usuarios.component";
import { AgregarUsuarioComponent } from "./components/agregar-usuario/agregar-usuario.component";
import { EditarUsuarioComponent } from "./components/editar-usuario/editar-usuario.component";

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
  ],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
