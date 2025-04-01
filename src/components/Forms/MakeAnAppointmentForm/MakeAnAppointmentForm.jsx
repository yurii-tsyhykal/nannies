import { Controller, useForm } from 'react-hook-form';
import css from './MakeAnAppointmentForm.module.css';
import clsx from 'clsx';
import SingleListTimePicker from '../../SingleListTimePicker/SingleListTimePicker';
import Button from '../../Button/Button';

const MakeAnAppointmentForm = ({ closeModal, nanny }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
        <input
          type="text"
          placeholder="Address"
          {...register('address', {
            required: true,
            min: 4,
          })}
        />
        <input
          type="tel"
          placeholder="+380"
          {...register('tel', {
            required: true,
            min: 9,
          })}
        />
        <input
          type="text"
          placeholder="Child's Age"
          {...register('age', {
            required: true,
            min: 1,
          })}
        />
        <Controller
          name="time"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <SingleListTimePicker {...field} />}
        />
      </div>
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
        type="text"
        placeholder="Father's or mother's name"
        {...register('name', {
          required: true,
          min: 2,
        })}
      />
      <textarea
        type="text"
        placeholder="Comment"
        rows={4}
        {...register('comment', {
          min: 4,
        })}
      ></textarea>
      <Button type="submit" variant="send-app">
        Send
      </Button>
    </form>
  );
};

export default MakeAnAppointmentForm;
