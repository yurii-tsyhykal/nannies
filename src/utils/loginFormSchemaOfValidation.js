import * as Yup from 'yup';
import {
  EMAIL_MIN_ERROR_MESSAGE,
  EMAIL_REGEX_ERROR_MESSAGE,
  EMAIL_REQUIRED,
  MAX_ERROR_MESSAGE,
} from '../helpers/constants';
import { EMAIL_REGEX } from '../helpers/regexes';
import { passwordValidationSchema } from './passwordValidationSchema';

const loginFormSchemaOfValidation = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required(EMAIL_REQUIRED)
    .min(4, EMAIL_MIN_ERROR_MESSAGE)
    .max(50, MAX_ERROR_MESSAGE)
    .matches(EMAIL_REGEX, EMAIL_REGEX_ERROR_MESSAGE),
  password: passwordValidationSchema,
});

export default loginFormSchemaOfValidation;
