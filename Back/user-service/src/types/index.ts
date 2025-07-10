import { IBaseEntity } from "@common-libs/types";

export interface IUser extends IBaseEntity {
  username?: string;
  email: string;
  password: string;
  date: string;
  role: string;
  id_doctor?: string | null;
}

export interface IUserResponse extends IBaseEntity {
  username?: string;
  email: string;
  date: string;
  role: string;
  id_doctor?: string | null;
}

export interface IUserRegistration {
  username?: string;
  email: string;
  password: string;
  date: string;
  role: string;
  id_doctor?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  user: IUserResponse;
  token: string;
}

export interface IJwtPayload {
  id: string;
  iat?: number;
  exp?: number;
}
