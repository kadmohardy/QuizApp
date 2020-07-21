export default interface ICreateUserDTO {
  name: string;
  email: string;
  gender: string;
  password: string;
  birthdate: Date;
  provider: boolean;
}
