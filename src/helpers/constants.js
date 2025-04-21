export const OPTIONS = [
  { value: 'a-to-z', label: 'A to Z' },
  { value: 'z-to-a', label: 'Z to A' },
  { value: 'less-than-10', label: 'Less than 10$' },
  { value: 'greater-than-10', label: 'Greater than 10$' },
  { value: 'popular', label: 'Popular' },
  { value: 'not-popular', label: 'Not popular' },
  { value: 'all', label: 'Show all' },
];

export const TOAST_MESSAGES = {
  LOGOUT: 'You have been successfully logged out!',
  FAV_BUTTON: 'Please log in or register to add favorites.',
  LOGIN: 'Login successful! Welcome back!',
  UNEXPECTED: 'An unexpected error occurred.',
  MAKE_AN_APPOINTMENT: 'Please log in to make an appointment.',
  APPOINTMENT_WITH_NAME: name =>
    `Your appointment request with ${name} has been sent!`,
  REGISTERED: 'Successfully registered! Welcome!',
};

export const MAX_ERROR_MESSAGE = 'Max 50 characters.';

export const ADDRESS_REQUIRED = 'Address is required';
export const ADDRESS_REGEX_ERROR_MESSAGE = 'Enter a valid address';
export const ADDRESS_MIN_ERROR_MESSAGE = 'At least 2 letters';

export const TEL_REQUIRED = 'Phone is required';
export const TEL_REGEX_ERROR_MESSAGE = 'Use the format: +380XXXXXXXXX';

export const AGE_REQUIRED = 'Age is required';
export const AGE_REGEX_ERROR_MESSAGE = 'Invalid. use the format: "2 years"';

export const TIME_REQUIRED = 'Time is required';

export const EMAIL_REQUIRED = 'Email is required';
export const EMAIL_REGEX_ERROR_MESSAGE = 'Use the format: example@test.com';
export const EMAIL_MIN_ERROR_MESSAGE = 'At least 4 letters';

export const NAME_REQUIRED = 'Name is required';
export const NAME_REGEX_ERROR_MESSAGE = 'Enter a valid name';
export const NAME_MIN_ERROR_MESSAGE = 'At least 2 letters';

export const COMMENT_REGEX_ERROR_MESSAGE = 'Enter a valid symbols';
export const COMMENT_MIN_ERROR_MESSAGE = 'This field cannot be empty';

export const PASSWORD_REQUIRED = 'Password is required';
export const PASSWORD_MIN_ERROR_MESSAGE = 'At least 8 letters';
export const PASSWORD_LOWER_CASE = 'At least one lowercase letter';
export const PASSWORD_UPPER_CASE = 'At least one uppercase letter';
export const PASSWORD_NUMBER = 'At least one number';
export const PASSWORD_SYMBOL = 'At least one symbol (@$!%*?&)';
