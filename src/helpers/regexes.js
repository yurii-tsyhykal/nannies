export const ADDRESS_REGEX = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9\s.,'’\-()/]+$/u;
export const TEL_REGEX = /^(?:\+380|380|0)\d{9}$/;
export const AGE_REGEX =
  /^\d+\s+(year|years|month|months|day|days|рік|роки|місяць|місяців|день|днів)$/iu;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const NAME_REGEX = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’\- ]+$/u;
export const COMMENT_REGEX = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9\s.,!?'"()\-\n\r]*$/u;

export const LOWER_CASE_REGEX = /[a-z]/;
export const UPPER_CASE_REGEX = /[A-Z]/;
export const DIGIT_REGEX = /\d/;
export const SYMBOL_REGEX = /[!@#$%^&*()_+\-=\\[\]{};':"|,.<>/?~`]/;