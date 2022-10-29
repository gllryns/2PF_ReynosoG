export interface Usuario {
  id: number;
  usuario: string;
  contrasena: string;
  admin: boolean;
  canLoad: boolean;
  canActivateChild: boolean;
  perfil?: string;
  email?: string;
}
