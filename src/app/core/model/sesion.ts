import { Usuario } from "../../usuarios/model/usuario";

export interface Sesion {
  sesionActiva: boolean;
  usuarioActivo?: Usuario;
}
