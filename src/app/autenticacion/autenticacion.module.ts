import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AutenticacionRoutingModule } from "./autenticacion-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AutenticacionModule {}
