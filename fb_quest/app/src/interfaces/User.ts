export interface IUser {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
}

export interface IUpdateUserProfileRequest {
  name: string | undefined;
  email: string | undefined;
}
