import { Controller, useForm } from 'react-hook-form';
import css from './MakeAnAppointmentForm.module.css';
import clsx from 'clsx';
import SingleListTimePicker from '../../SingleListTimePicker/SingleListTimePicker';
import Button from '../../Button/Button';
import appointmentFormSchemaOfValidation from '../../../utils/appointmentFormSchemaOfValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MakeAnAppointmentForm = ({ closeModal, nanny }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentFormSchemaOfValidation),
  });

  const onSubmit = data => {
    console.log(data);
    closeModal();
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
      <div className={css.inputWrapper}>
        <div className={css.errorWrapper}>
          <input type="text" placeholder="Address" {...register('address')} />
          {errors.address?.message && (
            <ErrorMessage message={errors.address?.message} />
          )}
        </div>
        <div className={css.errorWrapper}>
          <input type="tel" placeholder="+380" {...register('tel')} />
          {errors.tel?.message && (
            <ErrorMessage message={errors.tel?.message} />
          )}
        </div>
        <div className={css.errorWrapper}>
          <input type="text" placeholder="Child's Age" {...register('age')} />
          {errors.age?.message && (
            <ErrorMessage message={errors.age?.message} />
          )}
        </div>
        <div className={css.errorWrapper}>
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <SingleListTimePicker {...field} />}
          />
          {errors.time?.message && (
            <ErrorMessage message={errors.time?.message} />
          )}
        </div>
      </div>
      <div className={css.errorWrapper}>
        <input type="text" placeholder="Email" {...register('email')} />
        {errors.email?.message && (
          <ErrorMessage message={errors.email?.message} />
        )}
      </div>
      <div className={css.errorWrapper}>
        <input
          type="text"
          placeholder="Father's or mother's name"
          {...register('name')}
        />
        {errors.name?.message && (
          <ErrorMessage message={errors.name?.message} />
        )}
      </div>
      <div className={css.errorWrapper}>
        <textarea
          type="text"
          placeholder="Comment"
          rows={4}
          {...register('comment')}
        ></textarea>
        {errors.comment?.message && (
          <ErrorMessage message={errors.comment?.message} />
        )}
      </div>
      <Button type="submit" variant="send-app">
        Send
      </Button>
    </form>
  );
};

export default MakeAnAppointmentForm;
