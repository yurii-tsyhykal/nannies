import { FormProvider, useForm } from 'react-hook-form';
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
import Password from '../Password/Password';
import { signUp } from '../../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Loader from '../../Loader/Loader';
import { clearAuthError } from '../../../redux/auth/slice';
import { TOAST_MESSAGES } from '../../../helpers/constants';
import FormField from '../FormField/FormField';

const SignUpForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);
  const authError = useSelector(selectAuthError);

  const methods = useForm({
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
        <h2 className={css.formTitle}>Registration</h2>
        <p className={css.formText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <FormField
          name="name"
          placeholder="Name"
          wrapperClassName={css.errorWrapper}
          errorClassName={css.error}
        />
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
            Sign Up
          </Button>
        )}
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
