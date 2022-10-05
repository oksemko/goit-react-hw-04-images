import { Watch } from 'react-loader-spinner';

import styles from './Loader.module.css';

export const Loader = () => {
  <div className={styles.Watch}>
    <Watch
      color="00BFFF"
      height="200"
      width="200"
      radius="48"
      arialabel="watch-loading"
    />
  </div>
}



// <div className={styles.Loader}>
    // height="80"
    // width="80"
    // radius="48"
    // color="#4fa94d"
    // ariaLabel="watch-loading"
    // />
  // </div>
