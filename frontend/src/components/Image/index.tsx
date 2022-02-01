import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import styles from './styles.module.scss';

type ImageProps = {
  url: string;
  alt?: string;
  id?: string;
};

const Image = ({ url, alt, id }: ImageProps) => {
  const [loading, setLoading] = useState(true);

  function imageOnLoad() {
    setLoading(false);
  }

  return (
    <>
      <TailSpin width={80} height={80} color='#e74c3c' wrapperClass={styles.loadingContainer} visible={loading} />
      <img
        draggable={false}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        src={url}
        alt={alt}
        onLoad={imageOnLoad}
      />
    </>
  );
};

export default Image;
