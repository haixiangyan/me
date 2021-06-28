import React from 'react';
import styles from './styles.module.scss';

const HandDown = () => {
  const next = () => {
    const $about = document.querySelector('#about');
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.handDown} onClick={next}>
      <svg
        data-v-13cb14ba=""
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="hand-point-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          data-v-13cb14ba=""
          fill="currentColor"
          d="M91.826 467.2V317.966c-8.248 5.841-16.558 10.57-24.918 14.153C35.098 345.752-.014 322.222 0 288c.008-18.616 10.897-32.203 29.092-40 28.286-12.122 64.329-78.648 77.323-107.534 7.956-17.857 25.479-28.453 43.845-28.464l.001-.002h171.526c11.812 0 21.897 8.596 23.703 20.269 7.25 46.837 38.483 61.76 38.315 123.731-.007 2.724.195 13.254.195 16 0 50.654-22.122 81.574-71.263 72.6-9.297 18.597-39.486 30.738-62.315 16.45-21.177 24.645-53.896 22.639-70.944 6.299V467.2c0 24.15-20.201 44.8-43.826 44.8-23.283 0-43.826-21.35-43.826-44.8zM112 72V24c0-13.255 10.745-24 24-24h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24zm212-24c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"
          className=""
        />
      </svg>
    </div>
  );
};

export default HandDown;
