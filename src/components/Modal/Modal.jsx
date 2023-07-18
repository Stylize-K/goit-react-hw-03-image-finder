import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  //Вішаемо слухача на подію 'keydown' при монтуванні компонента модального вікна
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  //Видаляємо слухач на подію 'keydown' при розмонтуванні компонента модального вікна
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  //Метод закриття модального вікна по Escape
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  //Метод закриття модального по кліку на backdrop
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  //Компонент модального вікна буде рендеритись в окремий портал
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCLose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
