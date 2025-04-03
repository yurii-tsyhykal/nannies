import * as Yup from 'yup';
import {
  ADDRESS_REGEX,
  AGE_REGEX,
  COMMENT_REGEX,
  EMAIL_REGEX,
  NAME_REGEX,
  TEL_REGEX,
} from '../helpers/regexes';
import {
  ADDRESS_MIN_ERROR_MESSAGE,
  ADDRESS_REGEX_ERROR_MESSAGE,
  ADDRESS_REQUIRED,
  AGE_REGEX_ERROR_MESSAGE,
  AGE_REQUIRED,
  COMMENT_REGEX_ERROR_MESSAGE,
  EMAIL_MIN_ERROR_MESSAGE,
  EMAIL_REGEX_ERROR_MESSAGE,
  EMAIL_REQUIRED,
  MAX_ERROR_MESSAGE,
  NAME_MIN_ERROR_MESSAGE,
  NAME_REGEX_ERROR_MESSAGE,
  NAME_REQUIRED,
  TEL_REGEX_ERROR_MESSAGE,
  TEL_REQUIRED,
  TIME_REQUIRED,
} from '../helpers/constants';

const appointmentFormSchemaOfValidation = Yup.object({
  address: Yup.string()
    .trim()
    .required(ADDRESS_REQUIRED)
    .min(4, ADDRESS_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(ADDRESS_REGEX, ADDRESS_REGEX_ERROR_MESSAGE),
  tel: Yup.string()
    .trim()
    .required(TEL_REQUIRED)
    .matches(TEL_REGEX, TEL_REGEX_ERROR_MESSAGE),
  age: Yup.string()
    .trim()
    .required(AGE_REQUIRED)
    .min(1)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(AGE_REGEX, AGE_REGEX_ERROR_MESSAGE),
  time: Yup.string().required(TIME_REQUIRED),
  email: Yup.string()
    .trim()
    .required(EMAIL_REQUIRED)
    .min(4, EMAIL_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(EMAIL_REGEX, EMAIL_REGEX_ERROR_MESSAGE),
  name: Yup.string()
    .trim()
    .required(NAME_REQUIRED)
    .min(2, NAME_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(NAME_REGEX, NAME_REGEX_ERROR_MESSAGE),
  comment: Yup.string()
    .trim()
    .max(50, MAX_ERROR_MESSAGE)
    .matches(COMMENT_REGEX, COMMENT_REGEX_ERROR_MESSAGE),
});

export default appointmentFormSchemaOfValidation;
