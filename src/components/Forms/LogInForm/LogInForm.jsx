import { useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import { useId, useState } from 'react';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../redux/auth/operations';
import { getFavorites } from '../../../redux/favorites/operations';
import {
  selectAuthIsLoading,
  selectAuthUID,
} from '../../../redux/auth/selectors';

const LogInForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectAuthIsLoading);
  const [isOffEye, setIsOffEye] = useState(true);
  const pwdId = useId();
  const handleClick = () => setIsOffEye(!isOffEye);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(data => {
        dispatch(signIn(data));
        closeModal();
        if (uid && isAuthenticated) {
          dispatch(getFavorites({ uid }));
        }
      })}
    >
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <input
        type="text"
        placeholder="Email"
        {...register('email', {
          required: true,
          min: 4,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <label htmlFor={pwdId}>
        <svg
          width={20}
          height={20}
          onClick={handleClick}
          className={css.eyeIcon}
        >
          <use
            href={`/public/images/sprite.svg#${isOffEye ? 'eye-off' : 'eye'}`}
          ></use>
        </svg>
        <input
          id={pwdId}
          className={css.password}
          type={isOffEye ? 'password' : 'text'}
          placeholder="Password"
          {...register('password', { required: true })}
        />
      </label>
      <Button type="submit" variant="signUp-logIn-modals">
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
