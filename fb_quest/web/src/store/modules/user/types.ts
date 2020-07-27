export interface User {
  name: string;
  birthdate: Date;
  gender: string;
  phone: string;
  email: string;
  password: string;
}

export interface ProfileState {
  name: string | null;
  birthdate: Date | null;
  gender: string | null;
  phone: string | null;
  email: string | null;
}
