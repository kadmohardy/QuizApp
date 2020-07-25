export interface User {
  cpf: string;
  name: string;
  birthdate: Date;
  gender: string;
  phone: string;
  email: string;
  password: string;
}

export interface ProfileState {
  cpf: string | null;
  name: string | null;
  birthdate: Date | null;
  gender: string | null;
  phone: string | null;
  email: string | null;
}
