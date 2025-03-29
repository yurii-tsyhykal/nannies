import { useForm } from 'react-hook-form';
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

const SignUpForm = () => {
  const dispatch = useDispatch();
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectAuthIsLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(data => {
        registerNewUser(data);
        if (uid && isAuthenticated) {
          dispatch(getFavorites({ uid }));
        }
      })}
    >
      <h2 className={css.formTitle}>Registration</h2>
      <p className={css.formText}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <input
        className={css.name}
        type="text"
        placeholder="Name"
        {...register('name', { required: true, max: 77 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('email', {
          required: true,
          min: 4,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <input
        className={css.password}
        type="password"
        placeholder="Password"
        {...register('password', { required: true })}
      />
      {/* {isLoading ? <Loader /> :
      <Button type="submit" variant="signUp-logIn-modals">
        Sign Up
      </Button>} */}
      <Button type="submit" variant="signUp-logIn-modals">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
