export interface IUser {
  email: string;
  image: string;
  name: string;
}

export interface ISession {
  expires: string;
  user: IUser;
}
