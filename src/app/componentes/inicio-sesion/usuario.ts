export class Usuario {
  id: number | undefined;
  username!: string;
  password!: string;
  nombre!: string;
  apellido: string | undefined;
  email: string | undefined;
  roles: string[] = [];
}