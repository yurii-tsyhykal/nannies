import * as Yup from 'yup';
import {
  EMAIL_MIN_ERROR_MESSAGE,
  EMAIL_REGEX_ERROR_MESSAGE,
  EMAIL_REQUIRED,
  MAX_ERROR_MESSAGE,
  NAME_MIN_ERROR_MESSAGE,
  NAME_REGEX_ERROR_MESSAGE,
  NAME_REQUIRED,
} from '../helpers/constants';
import { EMAIL_REGEX, NAME_REGEX } from '../helpers/regexes';
import { passwordValidationSchema } from './passwordValidationSchema';

const signUpFormSchemaOfValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required(NAME_REQUIRED)
    .min(2, NAME_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(NAME_REGEX, NAME_REGEX_ERROR_MESSAGE),
  email: Yup.string()
    .trim()
    .required(EMAIL_REQUIRED)
    .min(4, EMAIL_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(EMAIL_REGEX, EMAIL_REGEX_ERROR_MESSAGE),
  password: passwordValidationSchema,
});

export default signUpFormSchemaOfValidation;
