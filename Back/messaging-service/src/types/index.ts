import { IBaseEntity } from "@common-libs/types";

export interface IContactRequest {
  subject: string;
  email: string;
  message: string;
}

export interface IContactResponse extends IBaseEntity {
  name: string;
  email: string;
  message: string;
  phone?: string;
}
