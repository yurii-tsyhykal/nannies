import { forwardRef } from 'react';

const Email = forwardRef(function Email(props, ref) {
  const { name, value, onChange, errorClassName, ...rest } = props;
  return (
    <>
      <input
        type="text"
        value={value || ''}
        name={name}
        onChange={onChange}
        className={errorClassName}
        placeholder="Email"
        ref={ref}
        {...rest}
      />
    </>
  );
});

export default Email;
