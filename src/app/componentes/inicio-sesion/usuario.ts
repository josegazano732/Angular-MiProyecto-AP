export class Usuario {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  email: string | undefined;
  roles: string[] = [];
}