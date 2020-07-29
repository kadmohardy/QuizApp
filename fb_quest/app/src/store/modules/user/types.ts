export interface User {
  name: string;
  email: string;
  password: string;
}

export interface ProfileState {
  name: string | null;
  email: string | null;
}
