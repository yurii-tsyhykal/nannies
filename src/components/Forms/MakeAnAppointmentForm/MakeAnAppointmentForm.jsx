import { FormProvider, useForm } from 'react-hook-form';
import css from './MakeAnAppointmentForm.module.css';
import clsx from 'clsx';
import SingleListTimePicker from '../../SingleListTimePicker/SingleListTimePicker';
import Button from '../../Button/Button';
import appointmentFormSchemaOfValidation from '../../../utils/appointmentFormSchemaOfValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../../Loader/Loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import {
  selectAuthUID,
  selectIsAuthenticated,
} from '../../../redux/auth/selectors';
import { TOAST_MESSAGES } from '../../../helpers/constants';
import FormField from '../FormField/FormField';

const MakeAnAppointmentForm = ({ closeModal, nanny }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const uid = useSelector(selectAuthUID);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const methods = useForm({
    resolver: yupResolver(appointmentFormSchemaOfValidation),
  });

  const onSubmit = () => {
    if (!uid && !isAuthenticated) {
      toast.warn(TOAST_MESSAGES.MAKE_AN_APPOINTMENT);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(TOAST_MESSAGES.APPOINTMENT_WITH_NAME(nanny.name));
      setIsSubmitting(false);
      methods.reset();
      closeModal();
    }, 1500);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={clsx(css.form, css.formAp)}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2 className={css.formTitle}>Make an appointment with a babysitter</h2>
        <div className={css.scrollWrapper}>
          <p className={css.formText}>
            Arranging a meeting with a caregiver for your child is the first
            step to creating a safe and comfortable environment. Fill out the
            form below so we can match you with the perfect care partner.
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
            <FormField
              name="address"
              placeholder="Address"
              wrapperClassName={css.errorWrapper}
              errorClassName={css.error}
              variant="appointment"
            />
            <FormField
              name="tel"
              placeholder="+380"
              type="tel"
              wrapperClassName={css.errorWrapper}
              errorClassName={css.error}
              variant="appointment"
            />

            <FormField
              name="age"
              placeholder="Child's Age"
              wrapperClassName={css.errorWrapper}
              errorClassName={css.error}
              variant="appointment"
            />

            <FormField
              name="time"
              placeholder="00 : 00"
              component={SingleListTimePicker}
              wrapperClassName={css.errorWrapper}
              errorClassName={css.error}
              variant="appointment"
            />
          </div>
          <FormField
            name="email"
            placeholder="Email"
            wrapperClassName={css.errorWrapper}
            errorClassName={css.error}
          />
          <FormField
            name="name"
            placeholder="Father's or mother's name"
            wrapperClassName={css.errorWrapper}
            errorClassName={css.error}
          />
          <FormField
            name="comment"
            placeholder="Comment"
            component="textarea"
            wrapperClassName={clsx(css.errorWrapper, css.commentWrapper)}
            errorClassName={css.textareaError}
          />
        </div>
        {isSubmitting ? (
          <Loader variant="submit" />
        ) : (
          <Button type="submit" variant="send-app">
            Send
          </Button>
        )}
      </form>
    </FormProvider>
  );
};

export default MakeAnAppointmentForm;
