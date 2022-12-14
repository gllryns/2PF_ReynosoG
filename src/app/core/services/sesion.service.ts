import { Injectable } from "@angular/core";
import { Sesion } from "src/app/core/model/sesion";
import { BehaviorSubject, Observable } from "rxjs";
import { Usuario } from "src/app/usuarios/model/usuario";

@Injectable({
  providedIn: "root",
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false,
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: Usuario) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: usuario,
    };

    this.sesionSubject.next(sesion);
  }
  logout() {
    const sesion: Sesion = {
      sesionActiva: false,
    };
  }

  obtenerSesion(): Observable<Sesion> {
    return this.sesionSubject.asObservable();
  }
}
