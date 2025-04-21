import { Controller, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthIsLoading,
} from '../../../redux/auth/selectors';
import signUpFormSchemaOfValidation from '../../../utils/signUpFormSchemaOfValidation';
import clsx from 'clsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Password from '../Password/Password';
import { signUp } from '../../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loader from '../../Loader/Loader';
import { clearAuthError } from '../../../redux/auth/slice';
import Email from '../Email/Email';
import { TOAST_MESSAGES } from '../../../helpers/constants';

const SignUpForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchemaOfValidation),
  });

  useEffect(() => {
    if (authError) {
      toast.error(authError);
      dispatch(clearAuthError());
    }
  }, [authError, dispatch]);

  const onSubmit = async data => {
    try {
      const result = await dispatch(signUp(data));
      if (signUp.fulfilled.match(result)) {
        toast.success(TOAST_MESSAGES.REGISTERED);
        reset();
        closeModal();
      }
    } catch {
      toast.error(TOAST_MESSAGES.UNEXPECTED);
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitle}>Registration</h2>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <div className={css.errorWrapper}>
        <input
          className={clsx(css.name, errors.name ? css.error : '')}
          type="text"
          placeholder="Name"
          {...register('name')}
        />
        {errors.name?.message && (
          <ErrorMessage message={errors.name?.message} />
        )}
      </div>
      <div className={css.errorWrapper}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Email {...field} errorClassName={errors.email ? css.error : ''} />
          )}
        />
        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}
      </div>
      <div className={clsx(css.password, css.errorWrapper)}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Password
              {...field}
              errorClassName={errors.password ? css.error : ''}
            />
          )}
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password?.message} />
        )}
      </div>
      {isLoading ? (
        <Loader variant="submit" />
      ) : (
        <Button type="submit" variant="signUp-logIn-modals">
          Sign Up
        </Button>
      )}
    </form>
  );
};

export default SignUpForm;
