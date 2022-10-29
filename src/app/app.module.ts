import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { MatTableModule } from "@angular/material/table";
import { ReactiveFormsModule } from "@angular/forms";
import { NavigComponent } from "./navig/navig.component";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material/table";
import { SharedModule } from "./shared/shared.module";
import { AlumnosModule } from "./alumnos/alumnos.module";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { CoreModule } from "./core/core.module";
import { AutenticacionModule } from "./autenticacion/autenticacion.module";
import { CursoService } from "./cursos/services/curso.service";

@NgModule({
  declarations: [AppComponent, NavigComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    CoreModule,
    SharedModule,
    AlumnosModule,
    UsuariosModule,
    AutenticacionModule,
  ],
  providers: [MatTableDataSource, CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
