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
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import loginFormSchemaOfValidation from '../../../utils/loginFormSchemaOfValidation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
  } = useForm({
    resolver: yupResolver(loginFormSchemaOfValidation),
  });

  const onSubmit = data => {
    dispatch(signIn(data));
    closeModal();
    if (uid && isAuthenticated) {
      dispatch(getFavorites({ uid }));
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <div className={css.errorWrapper}>
        <input type="text" placeholder="Email" {...register('email')} />
        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}
      </div>
      <div className={clsx(css.password, css.errorWrapper)}>
        <svg
          width={20}
          height={20}
          onClick={handleClick}
          className={css.eyeIcon}
        >
          <use
            href={`/images/sprite.svg#${isOffEye ? 'eye-off' : 'eye'}`}
          ></use>
        </svg>
        <input
          id={pwdId}
          type={isOffEye ? 'password' : 'text'}
          placeholder="Password"
          {...register('password')}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      <Button type="submit" variant="signUp-logIn-modals">
        Log In
      </Button>
    </form>
  );
};

export default LogInForm;
