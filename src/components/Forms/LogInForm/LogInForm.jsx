import { FormProvider, useForm } from 'react-hook-form';
import css from '../AuthForm.module.css';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../redux/auth/operations';
import {
  selectAuthError,
  selectAuthIsLoading,
} from '../../../redux/auth/selectors';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import logInFormSchemaOfValidation from '../../../utils/loginFormSchemaOfValidation';
import Password from '../Password/Password';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { clearAuthError } from '../../../redux/auth/slice';
import Loader from '../../Loader/Loader';
import { TOAST_MESSAGES } from '../../../helpers/constants';
import FormField from '../FormField/FormField';

const LogInForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const methods = useForm({
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
        toast.success(TOAST_MESSAGES.LOGIN);
        methods.reset();
        closeModal();
      }
    } catch {
      toast.error(TOAST_MESSAGES.UNEXPECTED);
    }
  };
  return (
    <FormProvider {...methods}>
      <form className={css.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={css.formTitle}>Log In</h2>
        <p className={css.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
        <FormField
          name="email"
          placeholder="Email"
          wrapperClassName={css.errorWrapper}
          errorClassName={css.error}
        />
        <FormField
          name="password"
          placeholder="Password"
          component={Password}
          wrapperClassName={clsx(css.password, css.errorWrapper)}
          errorClassName={css.error}
        />
        {isLoading ? (
          <Loader variant="submit" />
        ) : (
          <Button type="submit" variant="signUp-logIn-modals">
            Log In
          </Button>
        )}
      </form>
    </FormProvider>
  );
};

export default LogInForm;
