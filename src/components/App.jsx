import { Component } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/apiService';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
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

  //Метод обробки кліку на кнопку "Load more"
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const data = await fetchImages(query, page);

        console.log(data);

        if (!data.totalHits) {
          toast.success(
            'Sorry, there are no images matching your search query. Please try again'
          );
        }

        const totalPages = Math.ceil(data.totalHits / 12);

        if (page === totalPages) {
          this.setState({ endCollection: true });
          return toast.success('No more pictures');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          endCollection: false,
        }));
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, endCollection } = this.state;
    const showLoadMoreBtn = images.length > 0 && !endCollection;
    return (
      <div className={css.app}>
        <Toaster position="top-right" reverseOrder={false} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {showLoadMoreBtn && <Button onClick={() => this.handleLoadMore()} />}
        {isLoading && (
          <Loader>
            <ThreeCircles
              height="100"
              width="100"
              color="#063970"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </Loader>
        )}
      </div>
    );
  }
}
