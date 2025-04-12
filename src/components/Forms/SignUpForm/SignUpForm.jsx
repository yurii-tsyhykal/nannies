import { Controller, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthError,
  selectAuthIsLoading,
  selectAuthUID,
} from '../../../redux/auth/selectors';
import { getFavorites } from '../../../redux/favorites/operations';
import signUpFormSchemaOfValidation from '../../../utils/signUpFormSchemaOfValidation';
import clsx from 'clsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Password from '../Password/Password';
import { signUp } from '../../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loader from '../../Loader/Loader';
import { clearAuthError } from '../../../redux/auth/slice';

const SignUpForm = ({ closeModal }) => {
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
        toast.success('Successfully registered! Welcome!');
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
      <h2 className={css.formTitle}>Registration</h2>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <div className={css.errorWrapper}>
        <input
          className={css.name}
          type="text"
          placeholder="Name"
          {...register('name')}
        />
        {errors.name?.message && (
          <ErrorMessage message={errors.name?.message} />
        )}
      </div>
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
          Sign Up
        </Button>
      )}
    </form>
  );
};

export default SignUpForm;
