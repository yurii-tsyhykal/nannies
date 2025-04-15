import { Controller, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../redux/auth/operations';
import { getFavorites } from '../../../redux/favorites/operations';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthUID,
} from '../../../redux/auth/selectors';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import logInFormSchemaOfValidation from '../../../utils/loginFormSchemaOfValidation';
import Password from '../Password/Password';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { clearAuthError } from '../../../redux/auth/slice';
import Loader from '../../Loader/Loader';

const LogInForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInFormSchemaOfValidation),
  });

  useEffect(() => {
    if (authError) {
      toast.error(authError);
      dispatch(clearAuthError());
    }
  }, [authError, dispatch]);

  const onSubmit = async data => {
    try {
      const result = await dispatch(signIn(data));
      if (signIn.fulfilled.match(result)) {
        toast.success('Login successful! Welcome back!');
        reset();
        closeModal();
        dispatch(getFavorites({ uid }));
      }
    } catch {
      toast.error('An unexpected error occurred.');
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
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Password {...field} />}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      {isLoading ? (
        <Loader variant="submit" />
      ) : (
        <Button type="submit" variant="signUp-logIn-modals">
          Log In
        </Button>
      )}
    </form>
  );
};

export default LogInForm;
