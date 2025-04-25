import clsx from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const FormField = ({
  name,
  placeholder,
  type = 'text',
  component = 'input',
  wrapperClassName = '',
  inputClassName = '',
  errorClassName = '',
  variant = null,
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];
  const errorMessage = errors[name]?.message;
  const InputComponent =
    component === 'input'
      ? 'input'
      : component === 'textarea'
      ? 'textarea'
      : component;

  return (
    <>
      <div className={wrapperClassName}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const inputProps = {
              ...field,
              ...rest,
              id: name,
              value: field.value ?? '',
              placeholder,
              className: clsx(inputClassName, hasError && errorClassName),
            };
            if (component === 'textarea') {
              return <textarea {...inputProps} />;
            }
            if (typeof InputComponent !== 'string') {
              return <InputComponent {...inputProps} error={hasError} />;
            }
            return <input {...inputProps} type={type} />;
          }}
        />
        {errorMessage && (
          <ErrorMessage message={errorMessage} variant={variant} />
        )}
      </div>
    </>
  );
};

export default FormField;
