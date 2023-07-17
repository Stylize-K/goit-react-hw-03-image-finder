import { Component } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/apiService';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    modalImageURL: '',
    isLoading: false,
    showModal: false,
    endCollection: false,
  };

  //Метод обробки сабміту форми - додаємо дані в state (дані отримуємо з компонента serchBar)
  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        await fetchImages(query, page)
          .then(respons => {
            const data = respons;
            console.log(data);
            this.setState(({ images }) => ({
              images: [...images, ...data],
            }));
            // if (data.length < 12) {
            //   toast.success(
            //     "We're sorry, but you've reached the end of search results"
            //   );
            // }
            if (!data) {
              toast.success(
                'Sorry, there are no images matching your search query. Please try again'
              );
            }
          })
          .catch(error => {
            console.log('Error', error.message);
          });
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    return (
      <div className={css.app}>
        <Toaster position="top-right" reverseOrder={false} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {/* <Loader />
      <Button />
      <Modal /> */}
      </div>
    );
  }
}
