import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../model/alumno';
@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css'],
})
export class FormAlumnosComponent implements OnInit {
  errorMessage: string = '';
  alumnoForm = this.fb.group({
    id: [{ value: '', disabled: true }],
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    email: [null, Validators.required],
    edad: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern('[0-9][0-9]'),
      ]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {}

  onSubmit(): void {
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
