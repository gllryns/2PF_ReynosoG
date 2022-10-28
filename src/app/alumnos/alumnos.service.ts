import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Alumno } from './model/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnosUrl = environment.baseUrl + 'alumnos';

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http
      .get<Alumno[]>(this.alumnosUrl)
      .pipe(catchError(this.handleError));
  }

  getAlumno(id: string | null): Observable<Alumno> {
    if (id === '') {
      return of(this.initializeAlumno());
    }
    const url = `${this.alumnosUrl}/${id}`;
    return this.http.get<Alumno>(url).pipe(catchError(this.handleError));
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    alumno.id = '';
    return this.http
      .post<Alumno>(this.alumnosUrl, alumno)
      .pipe(catchError(this.handleError));
  }

  deleteAlumno(id: string): Observable<{}> {
    const url = `${this.alumnosUrl}/${id}`;
    return this.http.delete<Alumno>(url).pipe(catchError(this.handleError));
  }

  updateAlumno(alumno: Alumno): Observable<Alumno> {
    const url = `${this.alumnosUrl}/${alumno.id}`;
    return this.http.put<Alumno>(url, alumno).pipe(
      map(() => alumno),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Ha ocurrido un error: ${err.error.message}`;
    } else {
      errorMessage = `El servidor envió ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

  private initializeAlumno(): Alumno {
    return {
      id: '',
      nombre: '',
      apellido: '',
      email: '',
      edad: 0,
    };
  }
}
