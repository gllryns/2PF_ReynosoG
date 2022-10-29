import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Sesion } from "../core/model/sesion";
import { SesionService } from "../core/services/sesion.service";

@Component({
  selector: "app-navig",
  templateUrl: "./navig.component.html",
  styleUrls: ["./navig.component.css"],
})
export class NavigComponent implements OnInit {
  sesion: Sesion = { sesionActiva: false };

  sesion$!: Observable<Sesion>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sesionService: SesionService
  ) {}

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }
  onLogout(): void {
    this.sesionService.logout();
  }
}
