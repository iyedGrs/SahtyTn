export interface LinkItem {
  to: string;
  text: string;
  isRendezVous?: boolean;
}

export interface InputField {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  label: string;
}

export const links: LinkItem[] = [
  { to: "/home", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
  { to: "/register", text: "Rendez-Vous", isRendezVous: true },
];

export const inputFields: InputField[] = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email address",
    label: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    placeholder: "Password",
    label: "Password",
  },
];

export const RegisterFields: InputField[] = [
  {
    id: "id_doctor",
    name: "id_doctor",
    type: "number",
    autoComplete: "id_doctor",
    placeholder: "enter id_doctor",
    label: "id_doctor",
  },
  {
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    placeholder: "username",
    label: "username",
  },
  {
    id: "date",
    name: "date",
    type: "Date",
    autoComplete: "date",
    placeholder: "Date",
    label: "Date",
  },
  {
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "Email address",
    label: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    placeholder: "Password",
    label: "Password",
  },
  {
    id: "Confirmpassword",
    name: "Confirmpassword",
    type: "password",
    autoComplete: "confirmpassword",
    placeholder: "Confirm Password",
    label: "Password",
  },
];
