export interface IUser {
  id: number | undefined;
  name: string | undefined;
  avatar: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  biography: string | undefined;
  gender: string | undefined;
  target_gender: string | undefined;
  profession: string | undefined;
  company: string | undefined;
  place_id: string | undefined;
}

export interface IUpdateUserProfileRequest {
  name: string | undefined;
  biography: string | undefined;
  profession: string | undefined;
  company: string | undefined;
  target_gender: string | undefined;
}

export interface IUpdateUserPlaceRequest {
  userId: number;
  placeId: string;
}
