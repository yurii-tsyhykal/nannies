import { Controller, useForm } from 'react-hook-form';
import css from './MakeAnAppointmentForm.module.css';
import clsx from 'clsx';
import SingleListTimePicker from '../../SingleListTimePicker/SingleListTimePicker';
import Button from '../../Button/Button';
import appointmentFormSchemaOfValidation from '../../../utils/appointmentFormSchemaOfValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  selectAuthUID,
  selectIsAuthenticated,
} from '../../../redux/auth/selectors';
import Email from '../Email/Email';

const MakeAnAppointmentForm = ({ closeModal, nanny }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentFormSchemaOfValidation),
  });

  const onSubmit = () => {
    if (!uid && !isAuthenticated) {
      toast.warn('Please log in to make an appointment.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(
        `Your appointment request with ${nanny.name} has been sent!`
      );
      setIsSubmitting(false);
      reset();
      closeModal();
    }, 1500);
  };

  return (
    <form
      className={clsx(css.form, css.formAp)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={css.formTitle}>Make an appointment with a babysitter</h2>
      <p className={css.formText}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={css.nanny}>
        <img
          className={css.nannyAvatar}
          src={nanny.url}
          alt="Nanny's avatar"
          width={44}
          height={44}
        />
        <p>Your nanny</p>
        <h3 className={css.nannyName}>{nanny.name}</h3>
      </div>
      <div className={css.scrollWrapper}>
        <div className={css.inputWrapper}>
          <div className={css.errorWrapper}>
            <input
              className={errors.address ? css.error : ''}
              type="text"
              placeholder="Address"
              {...register('address')}
            />
            {errors.address?.message && (
              <ErrorMessage
                message={errors.address?.message}
                variant="appointment"
              />
            )}
          </div>
          <div className={css.errorWrapper}>
            <input
              className={errors.tel ? css.error : ''}
              type="tel"
              placeholder="+380"
              {...register('tel')}
            />
            {errors.tel?.message && (
              <ErrorMessage
                message={errors.tel?.message}
                variant="appointment"
              />
            )}
          </div>
          <div className={css.errorWrapper}>
            <input
              className={errors.age ? css.error : ''}
              type="text"
              placeholder="Child's Age"
              {...register('age')}
            />
            {errors.age?.message && (
              <ErrorMessage
                message={errors.age?.message}
                variant="appointment"
              />
            )}
          </div>
          <div className={css.errorWrapper}>
            <Controller
              name="time"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <SingleListTimePicker {...field} error={!!errors.time} />
              )}
            />
            {errors.time?.message && (
              <ErrorMessage
                message={errors.time?.message}
                variant="appointment"
              />
            )}
          </div>
        </div>
        <div className={css.errorWrapper}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Email
                {...field}
                errorClassName={errors.email ? css.error : ''}
              />
            )}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email?.message} />
          )}
        </div>
        <div className={css.errorWrapper}>
          <input
            className={errors.name ? css.error : ''}
            type="text"
            placeholder="Father's or mother's name"
            {...register('name')}
          />
          {errors.name?.message && (
            <ErrorMessage message={errors.name?.message} />
          )}
        </div>
        <div className={clsx(css.errorWrapper, css.commentWrapper)}>
          <textarea
            className={errors.comment ? css.textareaError : ''}
            type="text"
            placeholder="Comment"
            rows={4}
            {...register('comment')}
          ></textarea>
          {errors.comment?.message && (
            <ErrorMessage message={errors.comment?.message} />
          )}
        </div>
      </div>
      {isSubmitting ? (
        <Loader variant="submit" />
      ) : (
        <Button type="submit" variant="send-app">
          Send
        </Button>
      )}
    </form>
  );
};

export default MakeAnAppointmentForm;
