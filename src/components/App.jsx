import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar />
      <ImageGallery />
      {/* <Loader />
      <Button />
      <Modal /> */}
    </div>
  );
};
