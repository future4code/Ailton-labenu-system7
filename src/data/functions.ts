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
