import * as Yup from 'yup';
import {
  MAX_ERROR_MESSAGE,
  PASSWORD_LOWER_CASE,
  PASSWORD_MIN_ERROR_MESSAGE,
  PASSWORD_NUMBER,
  PASSWORD_REQUIRED,
  PASSWORD_SYMBOL,
  PASSWORD_UPPER_CASE,
} from '../helpers/constants';
import {
  DIGIT_REGEX,
  LOWER_CASE_REGEX,
  SYMBOL_REGEX,
  UPPER_CASE_REGEX,
} from '../helpers/regexes';

const errorMessages = {
  required: PASSWORD_REQUIRED,
  minLength: PASSWORD_MIN_ERROR_MESSAGE,
  lowerCase: PASSWORD_LOWER_CASE,
  upperCase: PASSWORD_UPPER_CASE,
  digit: PASSWORD_NUMBER,
  symbol: PASSWORD_SYMBOL,
};
export const passwordValidationSchema = Yup.string()
  .trim()
  .required(errorMessages.required)
  .min(8, errorMessages.minLength)
  .max(30, MAX_ERROR_MESSAGE)
  .test('has-lowercase', errorMessages.lowerCase, value =>
    LOWER_CASE_REGEX.test(value || '')
  )
  .test('has-uppercase', errorMessages.upperCase, value =>
    UPPER_CASE_REGEX.test(value || '')
  )
  .test('has-digit', errorMessages.digit, value =>
    DIGIT_REGEX.test(value || '')
  )
  .test('has-symbol', errorMessages.symbol, value =>
    SYMBOL_REGEX.test(value || '')
  );
