import { IBaseEntity } from "@common-libs/types";

export interface IContactRequest {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export interface IContactResponse extends IBaseEntity {
  name: string;
  email: string;
  message: string;
  phone?: string;
}
