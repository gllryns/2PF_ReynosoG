import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormAlumnosComponent } from "./alumnos/form-alumnos/form-alumnos.component";
import { ListaAlumnosComponent } from "./alumnos/lista-alumnos/lista-alumnos.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "form-alumnos", component: FormAlumnosComponent },
  { path: "lista-alumnos", component: ListaAlumnosComponent },
  { path: "home", component: HomeComponent },
  {
    path: "autenticacion",
    loadChildren: () =>
      import("./autenticacion/autenticacion.module").then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: "usuarios",
    loadChildren: () =>
      import("./usuarios/usuarios.module").then((m) => m.UsuariosModule),
  },
  {
    path: "cursos",
    loadChildren: () =>
      import("./cursos/cursos.module").then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
