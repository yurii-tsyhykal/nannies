import Button from '../Button/Button';
import css from './FormModal.module.css';
import Modal from 'react-modal';

const FormModal = ({ modalIsOpen, closeModal, children, variant = null }) => {
  const customStyles = {
    content: {
      position: 'relative',
      border: 'none',
      borderRadius: '30px',
      padding: 0,
      maxWidth: variant === 'appointment' ? '600px' : '566px',
      MaxHeight: variant === 'appointment' ? '908px' : '',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      '&::WebkitScrollbar': {
        width: '8px',
      },

      '&::WebkitScrollbarTrack': {
        background: 'transparent',
        borderRadius: '4px',
      },

      '&::WebkitScrollbarThumb': {
        background: 'rgba(40, 39, 39, 0.6)',
        borderRadius: '4px',
      },
    },
    overlay: {
      zIndex: '99',
      backgroundColor: 'rgba(11, 11, 11, 0.6)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterClose={() => document.body.classList.remove(css.modalOpen)}
      style={customStyles}
      bodyOpenClassName={css.modalOpen}
      contentLabel="Example Modal"
    >
      <Button type={'button'} variant="close-modal" onClick={closeModal}>
        <svg width={32} height={32}>
          <use href="/images/sprite.svg#close-modal"></use>
        </svg>
      </Button>
      {children}
    </Modal>
  );
};

export default FormModal;
