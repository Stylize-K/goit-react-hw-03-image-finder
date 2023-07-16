import PropTypes from 'prop-types';
import css from './Modal.modal.css';

export const Modal = props => {
  return (
    <div class={css.overlay}>
      <div class={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {};
