import { Controller, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../Button/Button';
import { registerNewUser } from '../../../services/registerNewUser';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectAuthUID,
} from '../../../redux/auth/selectors';
import { getFavorites } from '../../../redux/favorites/operations';
import signUpFormSchemaOfValidation from '../../../utils/signUpFormSchemaOfValidation';
import clsx from 'clsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Password from '../Password/Password';

const SignUpForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectAuthIsLoading);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchemaOfValidation),
  });

  const onSubmit = data => {
    registerNewUser(data);
    closeModal();
    if (uid && isAuthenticated) {
      dispatch(getFavorites({ uid }));
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
      <Button type="submit" variant="signUp-logIn-modals">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
