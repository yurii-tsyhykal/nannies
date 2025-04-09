import { Controller, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
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
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import logInFormSchemaOfValidation from '../../../utils/loginFormSchemaOfValidation';
import Password from '../Password/Password';

const LogInForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectAuthIsLoading);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInFormSchemaOfValidation),
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
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Password {...field} />}
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
