import { Component, Input, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { MatTableDataSource } from '@angular/material/table';
import { LoaderService } from 'src/app/shared/components/loader.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  Titulo = 'Listado de alumnos';
  errorMessage: string = '';
  columnas: string[] = ['id', 'nombre', 'email', 'edad'];
  public dataSource: any;

  constructor(
    private alumnosService: AlumnosService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() {
    this.loader.show();
    this.alumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource = new MatTableDataSource(alumnos);
        this.loader.hide();
      },
      error: (err) => {
        this.errorMessage = <any>err;
      },
      complete: () => {
        console.info('Obtener alumnos');
        this.loader.hide();
      },
    });
  }
  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}
