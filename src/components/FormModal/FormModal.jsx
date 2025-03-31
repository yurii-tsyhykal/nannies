import Button from '../Button/Button';
import css from './FormModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const FormModal = ({ modalIsOpen, closeModal, children, variant = null }) => {
  const customStyles = {
    content: {
      position: 'relative',
      border: 'none',
      borderRadius: '30px',
      padding: 0,
      maxWidth: variant === 'appointment' ? '600px' : '566px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
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
      style={customStyles}
      bodyOpenClassName={css.modalOpen}
      contentLabel="Example Modal"
    >
      <Button type={'button'} variant="close-modal" onClick={closeModal}>
        <svg width={32} height={32}>
          <use href="/public/images/sprite.svg#close-modal"></use>
        </svg>
      </Button>
      {children}
    </Modal>
  );
};

export default FormModal;
