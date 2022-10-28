import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlumnosService } from "../alumnos.service";
import { Alumno } from "../model/alumno";

@Component({
  selector: "app-form-alumnos",
  templateUrl: "./form-alumnos.component.html",
  styleUrls: ["./form-alumnos.component.css"],
})
export class FormAlumnosComponent implements OnInit {
  errorMessage: string = "";
  alumnoForm: FormGroup;

  constructor(private alumnosService: AlumnosService, private router: Router) {
    this.alumnoForm = new FormGroup({
      nombre: new FormControl("Giuseppe", [Validators.required]),
      apellido: new FormControl("del Bardo", [Validators.required]),
      email: new FormControl("db@p.com", [Validators.required]),
      edad: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.pattern("[0-9][0-9]"),
        ])
      ),
    });
  }

  onSubmit(): void {
    console.log("onSubmit called");
    const alumn: Alumno = {
      id: "", // + Math.round(Math.random() * 1000),
      nombre: this.alumnoForm.value.nombre,
      apellido: this.alumnoForm.value.apellido,
      email: this.alumnoForm.value.email,
      edad: this.alumnoForm.value.edad,
    };

    console.log(alumn);
    this.alumnosService.createAlumno(alumn);
    this.router.navigate(["form-alumnos"]); // localhost/cursos/listar

    // const alumn = { ...this.alumnos, ...this.alumnoForm.value };
    //   this.alumnosService.createAlumno(alumn).subscribe({
    //     next: () => this.onSaveComplete(),
    //     error: (err) => {
    //       this.errorMessage = <any>err;
    //     },
    //     complete: () => {
    //       console.info('creando alumno');
    //     },
    //   });
    // }
  }

  ngOnInit(): void {}
}
