import { regexDateBR, regexEmail } from "./constants";

export const convertDate = (date: string): string => {
  let convertDate: string[];
  if (date.includes("/")) convertDate = date.split("/");
  else convertDate = date.split("-");
  if (regexDateBR.test(convertDate.join("/")))
    [convertDate[0], convertDate[2]] = [convertDate[2], convertDate[0]];

  return convertDate.join("/");
};

export const checkEmail = (email: string) => regexEmail.test(email);

export const displayDate = (date: Date): string => {
  const year: string = date.getFullYear().toString();
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const day: string = date.getDate().toString().padStart(2, '0');

  const displayDate: string = day + "/" + month + "/" + year;

  return displayDate;
};