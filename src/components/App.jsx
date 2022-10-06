import { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';

import { ServiceAPI } from './API/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

// import styles from './App.module.css';
import styles from './Loader/Loader.module.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';



export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [imgId, setImgId] = useState(null);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getPicture = () => {
      setStatus('pending');
      ServiceAPI(searchQuery, page)
        .then(dataProcessing)
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    };
    getPicture();
  }, [page, searchQuery]);


  const dataProcessing = response => {
    const { hits: dataArray, totalHits } = response.data;

    if (!dataArray.length) {
      setStatus('rejected');
      setError(new Error('Try to change the request ✍️'));
      return;
    }

    window.scrollBy({
      top: document.body.clientHeight,
      behavior: 'smooth',
    });

    const data = dataArray.map(data => {
      const {
        id,
        largeImageURL: imageURL,
        webformatURL: src,
        tags: alt,
      } = data;
      return { id, imageURL, src, alt };
    });
    setData(state => [...state, ...data]);
    setTotal(totalHits);
    setStatus('resolved');
  };

  const handleSubmit = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setSearchQuery(newSearchQuery);
      setPage(1);
      setData([]);
    }
    return;
  };

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const clickOnImage = id => {
    setImgId(id);
    toggleModal();
  };

  const handleLoadMore = () => {
    setPage(state => state + 1);
  };

  const handleData = () => {
    return data.find(data => data.id === imgId);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      {data.length > 0 && <ImageGallery data={data} onClick={clickOnImage} />}
      {status === 'resolved' && data.length > 0 && data.length < total && (
        <>
           { Notify.info(`Hooray! Here You can see ${searchQuery}. 🤩`) }
          <Button onClick={handleLoadMore} />
        </>
      )}

      {status === 'pending' && (
        <div className={styles.Watch}>
          <Watch
            color="#00BFFF"
            height={200}
            width={200}
            ariaLabel="watch-loading"
          />
          <Loader />
        </div>
      )}

      {status === 'rejected' && (
        <div className={styles.ImageGallery}>
          <p>{Notify.failure(`Something went wrong! ⚠️ ${error}`)}</p>
        </div>
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={handleData().imageURL} alt={handleData().alt} />
        </Modal>
      )}
    </div>
  );
}







// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
