import css from './Password.module.css';
import { forwardRef, useState } from 'react';

const Password = forwardRef(function Password(props, ref) {
  const [isOffEye, setIsOffEye] = useState(true);

  const { name, onChange, ...rest } = props;
  const handleClick = () => setIsOffEye(!isOffEye);
  return (
    <>
      <svg width={20} height={20} onClick={handleClick} className={css.eyeIcon}>
        <use href={`/images/sprite.svg#${isOffEye ? 'eye-off' : 'eye'}`}></use>
      </svg>
      <input
        name={name}
        onChange={onChange}
        className={css.password}
        type={isOffEye ? 'password' : 'text'}
        placeholder="Password"
        ref={ref}
        {...rest}
      />
    </>
  );
});

export default Password;
